import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },    

    backgroundImage: {
      flex: 1,
      width: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    },

    controls: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 0,
      width: '100%',
      height: 64,
      borderRadius: 12,
      backgroundColor: '#3c096c',
    },
})

export default styles;