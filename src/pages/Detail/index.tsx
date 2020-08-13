import React, { useEffect, useState } from 'react';
import { ScrollView, RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { DetailProps } from '../../@types/types';

const BookDetail: React.FC<DetailProps> = ({route}) => {
    const bookId = route?.params?.id;
    const bookIndex = bookId - 1;
    const [selectedBookDetail, setSelectedBookDetail] = useState<any>([]);
    
    const navigation = useNavigation()
    

    function loadDetailPage() {
        axios.get('https://run.mocky.io/v3/96f0177a-118f-43b8-9c99-e84e3dc3fa81')
            .then(response => {
                const book = response.data;
                const bookData = book.data;

                setSelectedBookDetail(bookData[bookIndex])
            })
    }

    useEffect(() => {
        loadDetailPage();
    }, []);

    function handleGoBackToBookList() {
        navigation.navigate('BooksList');
    }

    return (
        <View style={styles.container}>
            <PageHeader iconName="audiobook">
                <BorderlessButton onPress={handleGoBackToBookList}>
                    <Feather name="arrow-left" size={36} color="white" />
                </BorderlessButton>
            </PageHeader>
            <ScrollView >
                <Image source={{uri: selectedBookDetail.medium_image_url}} style={styles.image} />
                <View style={styles.detailBody}>     
                    <RectButton style={styles.listenBookButtonContainer} onPress={() => navigation.navigate('AudioPlayer', {audio_url: selectedBookDetail.audio_url, cover_image_url: selectedBookDetail.cover_image_url})}>
                        <Text style={styles.listenBookButtonText} >Ouvir agora</Text>
                        <Feather name='arrow-right' size={32} color='white' />                        
                    </RectButton>
                    
                    <View style={styles.bookPrimaryInfo}>
                        <Text style={styles.title}>{selectedBookDetail.title}</Text>
                        <Text style={styles.author}>{selectedBookDetail.author}</Text>
                    </View>                    

                    <View style={styles.bookSecondaryInfo}>
                        <Text style={styles.tagline}>{selectedBookDetail.tagline}</Text>
                        <Text style={styles.description}>{selectedBookDetail.description}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
        
    )
}

export default BookDetail;