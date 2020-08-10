import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#e6e6f0',
        marginBottom: 12,
        overflow: 'hidden'
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    thumb: {
        width: 96,
        height: 96,
        borderRadius: 8
    },

    profileInfo: {
        marginLeft: 24,
    },

    title: {
        fontSize: 20,
        color: '#32264d'
    },

    tagline: {
        marginTop: 8
    }
});

export default styles;