import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import styles from './styles/FloatingTabBarStyles';
import HomeIcon from '../../assets/icons/icon-home.svg';
import ChatIcon from '../../assets/icons/icon-chat.svg';
import ProfileIcon from '../../assets/icons/icon-profile.svg';
import { RootTabParamList } from '../navigation/types';

type TabName = keyof RootTabParamList;

const FloatingTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
    const tabs = [
        { name: 'Home', icon: HomeIcon },
        { name: 'Chat', icon: ChatIcon },
        { name: 'Profile', icon: ProfileIcon },
    ];

    return (
        <View style={styles.floatingContainer}>
            {tabs.map((tab, index) => {
                const isFocused = state.index === index;
                const IconComponent = tab.icon;

                return (
                    <TouchableOpacity
                        key={tab.name}
                        onPress={() => {
                            const screenName = tab.name as TabName;
                            navigation.navigate(screenName as any);
                        }}
                        style={styles.iconContainer}
                    >
                        <IconComponent
                            width={32}
                            height={32}
                            color={isFocused ? styles.iconFocused.color : styles.icon.color}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default FloatingTabBar;
