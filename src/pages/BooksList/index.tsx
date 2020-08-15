import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import BookItem, { Book } from '../../components/BookItem';
import PageHeader from '../../components/PageHeader';
import axios from 'axios';

import styles from './styles';

function BooksList() {
    const [books, setBooks] = useState([]);

     
    axios.get('https://run.mocky.io/v3/96f0177a-118f-43b8-9c99-e84e3dc3fa81')
        .then(response => {
            const book = response.data;
            const bookData = book.data;

            setBooks(bookData);
        })

    return (
        <View style={styles.container}>
            <PageHeader title="My Library" iconName="library-books" />

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 16,

                }}
                style={styles.booksList}
            >
                {books.map((book: Book) => {
                    return (
                        <BookItem
                            key={book.id}
                            book={book}
                        />
                    )
                })}
            </ScrollView>
        </View>        
    )
}

export default BooksList;