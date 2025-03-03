import { StyleSheet } from 'react-native';
import {COLORS} from '../../constants/colors';

const ToggleSwitchStyles = StyleSheet.create({
    toggleContainer: {
        position: 'absolute',
        top: 30,
        alignSelf: 'center',
    },
    toggleButton: {
        width: 100,
        height: 36,
        backgroundColor: '#F5F5F5',
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        position: 'relative',
        justifyContent: 'space-between',
    },
    slider: {
        position: 'absolute',
        width: 46,
        height: 32,
        backgroundColor: 'white',
        borderRadius: 16,
        shadowColor: COLORS.grayText,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 16,
    },
    iconWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
});

export default ToggleSwitchStyles;
