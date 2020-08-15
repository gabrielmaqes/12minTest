import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BooksList from '../pages/BooksList';
import BookDetail from '../pages/Detail';
import AudioPlayer from '../pages/AudioPlayer';
import { StackParamList } from '../@types/types';

const {Navigator, Screen} = createStackNavigator<StackParamList>();

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