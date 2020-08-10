import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

function BookItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image source={{uri: "https://cdn.12min.com/books/books_background/163_chief_customer.thumb.jpg?1497471445"}} style={styles.thumb} />
                <View style={styles.profileInfo}>
                    <Text style={styles.title}>Audio Book Title</Text>
                    <Text style={styles.tagline}>Audio Book Title</Text>
                </View>
            </View>
        </View>
    )
}

export default BookItem;