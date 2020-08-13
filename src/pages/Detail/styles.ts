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
        color: '#36213e',
        maxWidth: '100%'
    },

    author: {
        fontSize: 16,
        color: '#8d99ae'
    },

    listenBookButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: '#c77dff',
        paddingVertical: 12,
        paddingHorizontal: 26,
        marginBottom: 16
    },

    listenBookButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },

    bookSecondaryInfo: {
        backgroundColor: '#c77dff',
        borderRadius: 12,
        borderColor: '#d2d2cf',
        borderWidth: 1,
        padding: 32
    },

    tagline: {
        fontSize: 20,
        fontWeight: '700',
        color: '#f8f7ff',
        marginBottom: 20
    },

    description: {
        fontSize: 16,
        fontWeight: '600',
        color: '#f8f7ff',
    }
});

export default styles;