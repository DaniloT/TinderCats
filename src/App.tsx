import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import store from './store/store';
import { ThemeProvider } from './theme/ThemeProvider';
import {COLORS} from './constants/colors';

const App = () => {
    (Text as any).defaultProps = (Text as any).defaultProps || {};
    (Text as any).defaultProps.style = { fontFamily: 'NunitoSans-Regular' };

    (TextInput as any).defaultProps = (TextInput as any).defaultProps || {};
    (TextInput as any).defaultProps.style = { fontFamily: 'NunitoSans-Regular' };

    return (
        <SafeAreaView style={styles.safeArea}>
            <GestureHandlerRootView style={styles.container}>
                <Provider store={store}>
                    <ThemeProvider>
                        <NavigationContainer>
                            <AppNavigator />
                        </NavigationContainer>
                    </ThemeProvider>
                </Provider>
            </GestureHandlerRootView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.whiteBackground,
    },
    container: {
        flex: 1,
    },
});

export default App;
