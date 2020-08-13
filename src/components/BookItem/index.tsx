import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export interface Book {
    id: number;
    title: string;
    tagline: string;
    description: string;
    author: string;
    medium_image_url: string;
    thumb_image_url: string;
    audio_url: string; 
}

export interface BookItemProps {
    book: Book;
}

const BookItem: React.FC<BookItemProps> = ({book}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: book.id})}>
                    <View style={styles.profile}>
                        <Image style={styles.thumb} resizeMode='contain' source={{uri: book.thumb_image_url}} />
                        <View style={styles.profileInfo}>
                            <Text style={styles.title}>{book.title}</Text>
                            <Text style={styles.author}>{book.author}</Text>
                        </View>
                    </View>    
            </TouchableOpacity>
        </View>    
    )
}

export default BookItem;