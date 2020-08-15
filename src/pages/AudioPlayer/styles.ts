import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      opacity: 0.8,
    },

    playerContainer: {
      justifyContent: 'flex-end',
      marginTop: -16,      
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,  
      backgroundColor: '#f8f7ff',
    },

    playerText: {
      marginTop: 12,
      marginHorizontal: 24
    },

    title: {
      fontFamily: 'Poppins_400Regular',
      justifyContent: 'center',
      fontSize: 16,
      color: '#3c096c'
    },

    author: {
      fontFamily: 'Roboto_400Regular',
      color: '#8d99ae'
    },

    controls: {
      alignItems: 'center',
      paddingBottom: 24,
      paddingTop: 16,
    },

    audioDurationContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
    },

    audioDurationText: {
      fontFamily: 'Roboto_400Regular',
      color: '#3c096c',
    },

    playbackSliderContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
    },

    playbackSlider: {
      width: '80%',
      marginHorizontal: 10,
    },
})

export default styles;