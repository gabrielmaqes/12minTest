import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 112,
        paddingBottom: 20,
        paddingHorizontal: 30,
        backgroundColor: '#3c096c',
    },

    header: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    logoImg: {
        width: 48,
        height: 48,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fefee3'
    },
});

export default styles;