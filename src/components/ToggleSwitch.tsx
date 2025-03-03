import React, { useState } from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles/ToggleSwitchStyles';

const ToggleSwitch = () => {
    const [selected, setSelected] = useState<'flame' | 'star'>('flame');
    const animatedValue = useState(new Animated.Value(0))[0];

    const toggleSwitch = (newSelection: 'flame' | 'star') => {
        if (selected !== newSelection) {
            setSelected(newSelection);
            Animated.timing(animatedValue, {
                toValue: newSelection === 'flame' ? 0 : 1,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }
    };

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [5, 49], // Adjusted to ensure proper centering
    });

    return (
        <View style={styles.toggleContainer}>
            <View style={styles.toggleButton}>
                <Animated.View style={[styles.slider, { transform: [{ translateX }] }]} />
                <TouchableOpacity onPress={() => toggleSwitch('flame')} style={styles.iconWrapper}>
                    <MaterialCommunityIcons name="fire" size={24} color={selected === 'flame' ? '#ff5a5f' : '#999'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleSwitch('star')} style={styles.iconWrapper}>
                    <MaterialCommunityIcons name="star" size={24} color={selected === 'star' ? '#ff5a5f' : '#999'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ToggleSwitch;
