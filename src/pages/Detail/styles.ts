import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    detailBody: {
        marginTop: -30,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 12,
        backgroundColor: '#FFF'
    },

    image: {
        width: '100%',
        height: 256,
    },

    bookPrimaryInfo: {
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        marginBottom: 12
    },

    title: {
        fontSize: 22,
        fontFamily: 'Poppins_400Regular',
        color: '#36213e',
    },

    author: {
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
        color: '#8d99ae'
    },

    listenBookButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: '#3c096c',
        paddingVertical: 12,
        paddingHorizontal: 26,
        marginBottom: 16
    },

    listenBookButtonText: {
        fontSize: 20,
        fontFamily: 'Poppins_700Bold',
        color: '#FFF'
    },

    bookSecondaryInfo: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        paddingTop: 16,
        paddingBottom: 24,
        paddingHorizontal: 16
    },

    tagline: {
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
        color: '#36213e',
        marginBottom: 20,
        borderColor: '#8d99ae',
        borderBottomWidth: 1,
        
    },

    description: {
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
        textAlign: 'justify',
        color: '#403d39',
    }
});

export default styles;