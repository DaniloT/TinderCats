import { StyleSheet } from 'react-native';

const ToggleSwitchStyles = StyleSheet.create({
    toggleContainer: {
        position: 'absolute',
        top: 30, // Moved higher for better spacing
        alignSelf: 'center',
    },
    toggleButton: {
        width: 100, // Slightly reduced width
        height: 36, // Reduced height for a closer match
        backgroundColor: '#F5F5F5',
        borderRadius: 18, // Adjusted to match new height
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        position: 'relative',
        justifyContent: 'space-between',
    },
    slider: {
        position: 'absolute',
        width: 46, // Adjusted width for balance
        height: 32, // Reduced height to match new button size
        backgroundColor: 'white',
        borderRadius: 16, // Adjusted for a balanced appearance
        shadowColor: '#00000030',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    iconWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
});

export default ToggleSwitchStyles;
