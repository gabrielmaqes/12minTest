import React from 'react';
import { TouchableOpacity, View, ImageBackground, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import { Feather } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { Audio } from 'expo-av';

import { AudioProps } from '../../@types/types';
import PageHeader from '../../components/PageHeader';
import { millisToMinutesAndSeconds } from '../../utils/timeToMinutesAndSeconds';

import styles from './styles';

interface StateProps {
	isPlaying: boolean;
	playbackInstance: Audio.Sound | null;
	volume: number;
	isBuffering: boolean;
	isLoaded: boolean;
	shouldPlayAtEndOfSeek: boolean,
	isSeeking: boolean;
	audioDuration: number;
	currentPosition: number;
}

export default class AudioPlayer extends React.Component<AudioProps> {
	_isMounted = false;
	state: StateProps = {
		isPlaying: false,
		playbackInstance: null,
		volume: 1.0,
		isBuffering: true,
		isLoaded: false,
		shouldPlayAtEndOfSeek: false,
		isSeeking: false,
		audioDuration: 0,
		currentPosition: 0
	}

	async componentDidMount() {
		this._isMounted = true;
		try {			
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: false,
				interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
				playsInSilentModeIOS: true,
				interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
				shouldDuckAndroid: true,
				staysActiveInBackground: false,
				playThroughEarpieceAndroid: false
			})
			
			this.loadAudio()			
		} catch (e) {
			console.log('Erro ao montar o componente ' + e)
		}
	}

	async loadAudio() {
		const { isPlaying, volume } = this.state;

		try {
			const playbackInstance = new Audio.Sound()
			const source = {
				uri: this.props.route.params.bookInfo.audio_url
			}

			const status = {
				shouldPlay: isPlaying,
				volume: volume,

			}

			playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
			await playbackInstance.loadAsync(source, status, false)
			this.setState({
				playbackInstance
			})
			await playbackInstance.getStatusAsync().then((response) => {
				this.setState({
					isLoaded: response.isLoaded
				})
				if (response.isLoaded == true) {
					this.setState({
						audioDuration: response.durationMillis
					})
				}
			})

		} catch (e) {
			console.log('Erro ao carregar o audio ' + e)
		}
	}

	onPlaybackStatusUpdate = async (status: any) => {
		if (this._isMounted) {this.setState({
			isBuffering: status.isBuffering,
			currentPosition: status.positionMillis
		})

		if (status.didJustFinish) {
			const { isPlaying } = this.state
			this.setState({
				isPlaying: !isPlaying,
			})
			await this.state.playbackInstance?.stopAsync()
		}}
	}

	handlePlayPause = async () => {
		try {
			const { isPlaying, playbackInstance } = this.state
			if (playbackInstance == null) return;
			isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

			this.setState({
				isPlaying: !isPlaying
			})

		} catch (err) {
			console.log(`Erro no handlePlayPause: ${err}`)
		}
	}

	onSeekSliderValueChange = () => {
		if (this.state.playbackInstance != null && !this.state.isSeeking) {
			this.state.isSeeking = true;			
			this.state.shouldPlayAtEndOfSeek = this.state.isPlaying;
			this.state.playbackInstance.pauseAsync();
		}
	};

	onSeekSliderSlidingComplete = async (value: number) => {
		if (this.state.playbackInstance != null) {
			this.state.isSeeking = false;
			const seekPosition = value * this.state.audioDuration;
			if (this.state.shouldPlayAtEndOfSeek) {
				this.state.playbackInstance.playFromPositionAsync(seekPosition);
			} else {
				this.state.playbackInstance.setPositionAsync(seekPosition);
			}
		}
	};

	getSeekSliderPosition() {
		if (
			this.state.playbackInstance != null &&
			this.state.currentPosition != 0 &&
			this.state.audioDuration != 0
		) {
			return (
				(this.state.currentPosition) /
				this.state.audioDuration
			);
		}
		return 0;
	}

	componentWillUnmount() {
		this._isMounted = false;
		try{			
			const {playbackInstance} = this.state
			if (playbackInstance == null) return;			
			playbackInstance.setStatusAsync({shouldPlay: false})
			playbackInstance.unloadAsync();
		} catch(err) {
			console.log(`Erro na desmontagem de componente: ${err}`)
		}
	}	

	render() {
		if (!this.state.isLoaded){
			return <AppLoading />
			} else {
			return (
				<>
					<PageHeader iconName="book-open-page-variant">
						<BorderlessButton onPress={() => this.props.navigation.goBack()}>
							<Feather name="arrow-left" size={36} color="white" />
						</BorderlessButton>
					</PageHeader>
					<ImageBackground 
						source={{uri: this.props.route.params.bookInfo.cover_image_url}} 
						style={styles.backgroundImage} 
						blurRadius={3}
					/>
					<View style={styles.playerContainer}>
						<View style={styles.playerText}>
							<Text style={styles.title}>
								{this.props.route.params.bookInfo.title}
							</Text>
							<Text style={styles.author}>
								{this.props.route.params.bookInfo.author}
							</Text>
						</View>							
						<View style={styles.controls}>
							<TouchableOpacity onPress={this.handlePlayPause}>
								{this.state.isPlaying ? (
									<Feather name='pause' style={{fontSize: 42, color: '#3c096c'}} />
								) : (
									<Feather name='play' style={{fontSize: 42, color: '#3c096c'}} />
								)}
							</TouchableOpacity>

							<View style={styles.audioDurationContainer}>
								<Text style={styles.audioDurationText}>
									{millisToMinutesAndSeconds(this.state.currentPosition)}
								</Text>

								<Text style={styles.audioDurationText}>
									{millisToMinutesAndSeconds(this.state.audioDuration)}
								</Text>
							</View>							
							
							<View style={ styles.playbackSliderContainer}>
								<Slider
									style={styles.playbackSlider}
									value={this.getSeekSliderPosition()}
									onValueChange={this.onSeekSliderValueChange}
									onSlidingComplete={this.onSeekSliderSlidingComplete}
									thumbTintColor="#3c096c"
									minimumTrackTintColor="#3c096c"
									maximumTrackTintColor="#c77dff"
								/>
							</View>						
						</View>
					</View>			
				</>
			)
		}
	}
}