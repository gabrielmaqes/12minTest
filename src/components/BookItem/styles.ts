import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderBottomWidth: 2,
        borderColor: '#e6e6f0',
        borderRadius: 12,
        paddingLeft: 16,
        marginBottom: 12,
        overflow: 'hidden',        
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 16,
    },

    thumb: {
        width: 96,
        height: 96,
        borderRadius: 16
    },

    profileInfo: {
        marginLeft: 24,
        height: 96,
        justifyContent: 'space-evenly'
    },

    title: {
        width: 220,
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
        color: '#36213e',
    },

    author: {
        fontSize: 14,
        fontFamily: 'Roboto_400Regular',
        color: '#8d99ae',
        marginTop: 8
    }
});

export default styles;