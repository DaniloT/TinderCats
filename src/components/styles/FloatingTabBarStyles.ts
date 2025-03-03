import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const FloatingTabBarStyles = StyleSheet.create({
    floatingContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 40,
        alignSelf: 'center',
        shadowColor: COLORS.grayText,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 16,
    },
    iconContainer: {
        marginHorizontal: 15,
    },
    icon: {
        color: COLORS.graySoft,
    },
    iconFocused: {
        color: COLORS.redSoft,
    },
});


export default FloatingTabBarStyles;
