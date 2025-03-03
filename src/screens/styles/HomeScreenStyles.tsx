import { StyleSheet } from 'react-native';

const HomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    numberText: {
        fontSize: 140,
        fontWeight: 'bold',
        color: '#BBBBBB', // Soft light gray
        position: 'absolute',
        top: '15%',
    },
});

export default HomeScreenStyles;
