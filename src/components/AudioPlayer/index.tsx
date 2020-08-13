import React from 'react'
import { TouchableOpacity, View, ImageBackground } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Audio } from 'expo-av';

import { AudioProps } from '../../@types/types'
import PageHeader from '../PageHeader';

import styles from './styles'

export default class AudioPlayer extends React.Component<AudioProps> {
	_isMounted = false;
	state: {isPlaying: boolean, playbackInstance: Audio.Sound | null, volume: number, isBuffering: boolean} = {
		isPlaying: false,
		playbackInstance: null,
		volume: 1.0,
		isBuffering: true
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
			console.log(e)
		}
	}

	async loadAudio() {
		const { isPlaying, volume } = this.state
		try {
			const playbackInstance = new Audio.Sound()
			const source = {
				uri: this.props.route.params.audio_url
			}

			const status = {
				shouldPlay: isPlaying,
				volume: volume
			}

			playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
			await playbackInstance.loadAsync(source, status, false)
			this.setState({
				playbackInstance
			})
		} catch (e) {
			console.log(e)
		}
	}

	onPlaybackStatusUpdate = (status: any) => {
		this.setState({
			isBuffering: status.isBuffering
		})
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

	async componentWillUnmount() {
		this._isMounted = false;
		try{			
			const {playbackInstance} = this.state
			if (playbackInstance == null) return;
			await playbackInstance.unloadAsync();
			this.setState({playbackInstance: null})
		} catch(err) {
			console.log(`Erro na desmontagem de componente: ${err}`)
		}
	}	

	render() {
		return (
			<View style={styles.container}>
				<PageHeader iconName="book-open-page-variant">
					<BorderlessButton onPress={() => this.props.navigation.goBack()}>
						<Feather name="arrow-left" size={36} color="white" />
					</BorderlessButton>
				</PageHeader>
				<ImageBackground source={{uri: this.props.route.params.cover_image_url}} style={styles.backgroundImage}>
					<View style={styles.controls}>
						<TouchableOpacity onPress={this.handlePlayPause}>
							{this.state.isPlaying ? (
								<Feather name='pause' size={32} color='white' />
							) : (
								<Feather name='play' size={32} color='white' />
							)}
						</TouchableOpacity>
					</View>
				</ImageBackground>				
			</View>
		)
	}
}