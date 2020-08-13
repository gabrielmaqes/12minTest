import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderBottomWidth: 2,
        borderColor: '#e6e6f0',
        borderRadius: 12,
        paddingLeft: 16,
        marginBottom: 12,
        overflow: 'hidden'
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 16,
        width: '100%',
    },

    thumb: {
        width: 96,
        height: 96,
        borderRadius: 16
    },

    profileInfo: {
        marginLeft: 24,
    },

    title: {
        fontSize: 18,
        width: 220,
        fontWeight: 'bold',
        color: '#36213e',
    },

    author: {
        fontSize: 14,
        color: '#8d99ae',
        marginTop: 8
    }
});

export default styles;