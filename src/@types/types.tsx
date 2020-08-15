import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';

export type StackParamList = {
    BooksList: undefined;
    Detail: { id: number };
    AudioPlayer: { bookInfo: any };
};

type DetailScreenRouteProp = RouteProp<
    StackParamList,
    'Detail'
>;

type AudioPlayerScreenRouteProp = RouteProp<
    StackParamList,
    'AudioPlayer'
>;

type AudioPlayerScreenNavigatorProp = StackNavigationProp<
    StackParamList,
    'AudioPlayer'
>;

export type AudioProps = {
    route: AudioPlayerScreenRouteProp,
    navigation: AudioPlayerScreenNavigatorProp;
};

export type DetailProps = {
    route: DetailScreenRouteProp,
};