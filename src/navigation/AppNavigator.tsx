import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FloatingTabBar from '../components/FloatingTabBar';

const Tab = createMaterialTopTabNavigator();

const CustomTabBarWrapper = (props: any) => {
    return (
        <View style={styles.customTabBarContainer}>
            <FloatingTabBar {...props} />
        </View>
    );
};

const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: styles.hiddenTabBar,
                tabBarShowLabel: false,
                swipeEnabled: false,
            }}
            tabBar={CustomTabBarWrapper}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    customTabBarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    hiddenTabBar: {
        display: 'none',
    },
});

export default AppNavigator;
