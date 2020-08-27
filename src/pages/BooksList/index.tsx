import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import BookItem, { Book } from '../../components/BookItem';
import PageHeader from '../../components/PageHeader';
import axios from 'axios';


import { BorderlessButton, TextInput } from 'react-native-gesture-handler';

import styles from './styles';

function BooksList() {
    const [books, setBooks] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [isFilterVisible, setIsFilterVisible] = useState(false);

     
    axios.get('https://run.mocky.io/v3/96f0177a-118f-43b8-9c99-e84e3dc3fa81')
        .then(response => {
            const book = response.data;
            const bookData = book.data;

            setBooks(bookData);
        })

    function handleToggleFilterVisible() {
        setIsFilterVisible(!isFilterVisible);
    }

    function filterBooks(book: any) {
        return book.filter((bookItem: Book) => bookItem.title.toUpperCase().includes(textInput.toUpperCase()))
    }

    return (
        <View style={styles.container}>
            <PageHeader title="My Library" headerAction={(
                <BorderlessButton onPress={handleToggleFilterVisible}>
                    <MaterialIcons name={isFilterVisible ? "close" : "search"} color="white" size={32} />
                </BorderlessButton>
            )}            
            >
                { isFilterVisible && (
                    <View style={styles.searchForm}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setTextInput(text)}
                            placeholder={"Search your favorite books"}
                        />
                    </View>
                )}
            </PageHeader>

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 16,

                }}
                style={styles.booksList}
            >
                {filterBooks(books).map((book: Book) => {
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