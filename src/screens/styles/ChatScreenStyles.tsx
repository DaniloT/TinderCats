import { StyleSheet } from 'react-native';
import {COLORS} from '../../constants/colors';

const ChatScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.whiteBackground,
    },
    numberText: {
        fontSize: 140,
        fontWeight: 'bold',
        color: COLORS.grayText,
        position: 'absolute',
        top: '15%',
    },
});

export default ChatScreenStyles;
