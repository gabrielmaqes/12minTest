import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from './styles';

import BookItem from '../../components/BookItem';


function BooksList() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.bookList}>
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
            </ScrollView>
        </View>        
    )
}

export default BooksList;