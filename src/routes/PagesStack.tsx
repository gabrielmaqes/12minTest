import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import BooksList from '../pages/BooksList';
import BookDetail from '../pages/Detail';
import AudioPlayer from '../components/AudioPlayer/';

type RootStackParamList = {
    BooksList: undefined;
    Detail: { id: number };
    AudioPlayer: { audio_url: string };
};

type AudioPlayerScreenRouteProp = RouteProp<
    RootStackParamList,
    'AudioPlayer'
>;

type AudioPlayerScreenNavigatorProp = StackNavigationProp<
    RootStackParamList,
    'AudioPlayer'
>;

type Props = {
    route: AudioPlayerScreenRouteProp,
    navigation: AudioPlayerScreenNavigatorProp;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

function HomeStack() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="BooksList" screenOptions={{ headerShown: false }}>
                <Screen name="BooksList" component={BooksList} />
                <Screen name="Detail" component={BookDetail} />
                <Screen name="AudioPlayer" component={AudioPlayer} />
            </Navigator>
        </NavigationContainer>
    )
}

export default HomeStack;