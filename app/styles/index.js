import Constants from 'expo-constants'
import Platform from 'react-native'

export default {
    colors: {
        dark: '#495057',
        darkGreen: '#ece4db',
        green: '#d8e2dc',
        lightGreen: '#e8e8e4',
        lightPink: '#f8edeb',
        pink: '#fae1dd',
        white: '#ffffff'
    },
    fonts: {
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto' 
    },
    screenPaddingTop: Constants.statusBarHeight

}