import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/ChatScreenStyles';

const ChatScreen = () => {
    const displayNumber = '02';

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{displayNumber}</Text>
        </View>
    );
};

export default ChatScreen;
