import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/ProfileScreenStyles';

const ProfileScreen = () => {
    const displayNumber = '03';

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{displayNumber}</Text>
        </View>
    );
};

export default ProfileScreen;
