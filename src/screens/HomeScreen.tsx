import React, { useEffect, useRef } from 'react';
import { View, Image, ActivityIndicator, TouchableOpacity, Text, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import ToggleSwitch from '../components/ToggleSwitch';
import { fetchCatImages } from '../services/CatService';
import styles from './styles/HomeScreenStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setStacks, setLoading, nextImage, swapStacks, setSwipeText, resetSwipe, voteCatImage } from '../store/actions/catActions';

const HomeScreen = () => {
    const dispatch = useDispatch();

    // Redux State
    const stackA = useSelector((state: RootState) => state.cat.stackA);
    const stackB = useSelector((state: RootState) => state.cat.stackB);
    const activeStack = useSelector((state: RootState) => state.cat.activeStack);
    const currentIndex = useSelector((state: RootState) => state.cat.currentIndex);
    const loading = useSelector((state: RootState) => state.cat.loading);
    const swipeText = useSelector((state: RootState) => state.cat.swipeText);

    // Animations
    const swipeAnimation = useRef(new Animated.ValueXY()).current;
    const swipeOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const loadInitialImages = async () => {
            dispatch(setLoading(true));
            const imagesA = await fetchCatImages();
            const imagesB = await fetchCatImages();
            dispatch(setStacks(imagesA, imagesB));
        };

        loadInitialImages();
    }, [dispatch]);

    const handleButtonPress = (direction: 'left' | 'right') => {
        const isRight = direction === 'right';
        const currentCatId = activeStack === 'A' ? stackA[currentIndex]?.id : stackB[currentIndex]?.id;

        // Vote after button press
        dispatch(voteCatImage(currentCatId, isRight ? 1 : -1));

        // Set Swipe Text
        dispatch(setSwipeText(isRight ? 'LIKE' : 'NOPE'));
        swipeOpacity.setValue(1);

        // Trigger the same animation as a swipe
        Animated.timing(swipeAnimation, {
            toValue: { x: isRight ? 500 : -500, y: 0 }, // ✅ Match swipe behavior
            duration: 300,
            useNativeDriver: true,
        }).start(() => handleSwipeComplete());
    };

    const handleSwipeComplete = () => {
        dispatch(resetSwipe());

        // Reset swipeText and opacity after animation completes
        dispatch(setSwipeText(''));  // Reset swipeText
        swipeOpacity.setValue(0);    // Reset swipeOpacity

        if (currentIndex < 9) {
            dispatch(nextImage());
        } else {
            dispatch(swapStacks());

            // Preload a new stack in the background
            dispatch(setLoading(true));
            fetchCatImages().then((newImages) => {
                dispatch(setStacks(activeStack === 'A' ? newImages : stackB, activeStack === 'B' ? newImages : stackA));
            });
        }

        swipeAnimation.setValue({ x: 0, y: 0 });
    };

    const onSwipe = Animated.event(
        [{ nativeEvent: { translationX: swipeAnimation.x } }],
        {
            useNativeDriver: false,
            listener: (event) => {
                const { translationX } = event.nativeEvent;
                if (translationX > 120) {
                    dispatch(setSwipeText('LIKE'));
                    swipeOpacity.setValue(1);
                } else if (translationX < -120) {
                    dispatch(setSwipeText('NOPE'));
                    swipeOpacity.setValue(1);
                } else {
                    dispatch(resetSwipe());
                    swipeOpacity.setValue(0);
                }
            },
        }
    );

    const onSwipeEnd = (event: any) => {
        if (event.nativeEvent.state === State.END) {
            const { translationX } = event.nativeEvent;
            const swipeThreshold = 120;
            const currentCatId = activeStack === 'A' ? stackA[currentIndex]?.id : stackB[currentIndex]?.id;

            if (translationX > swipeThreshold) {
                dispatch(voteCatImage(currentCatId, 1)); // Like vote
                dispatch(setSwipeText('LIKE'));
                Animated.timing(swipeOpacity, { toValue: 1, duration: 300, useNativeDriver: true }).start();
                Animated.timing(swipeAnimation, {
                    toValue: { x: 500, y: 0 },
                    duration: 400,
                    useNativeDriver: true,
                }).start(() => handleSwipeComplete());
            } else if (translationX < -swipeThreshold) {
                dispatch(voteCatImage(currentCatId, -1)); // Nope vote
                dispatch(setSwipeText('NOPE'));
                Animated.timing(swipeOpacity, { toValue: 1, duration: 300, useNativeDriver: true }).start();
                Animated.timing(swipeAnimation, {
                    toValue: { x: -500, y: 0 },
                    duration: 400,
                    useNativeDriver: true,
                }).start(() => handleSwipeComplete());
            } else {
                Animated.spring(swipeAnimation, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
                swipeOpacity.setValue(0);
                dispatch(setSwipeText(''));  // Reset swipeText immediately
            }
        }
    };

    return (
        <View style={styles.container}>
            <ToggleSwitch />

            <PanGestureHandler onGestureEvent={onSwipe} onHandlerStateChange={onSwipeEnd}>
                <View style={styles.catImageContainer}>
                    {loading && activeStack === 'A' && stackA.length === 0 ? (
                        <ActivityIndicator size="large" color="#ff5a5f" style={styles.loadingSpinner} />
                    ) : (
                        <>
                            {currentIndex + 1 < 10 && (
                                <View style={styles.imageWrapper}>
                                    <Image
                                        source={{
                                            uri: activeStack === 'A' ? stackA[currentIndex + 1]?.url : stackB[currentIndex + 1]?.url,
                                        }}
                                        style={[styles.catImage, styles.nextImage]}
                                    />
                                </View>
                            )}

                            <Animated.View
                                style={[
                                    styles.topCard,
                                    { transform: swipeAnimation.getTranslateTransform() },
                                ]}
                            >
                                <Image
                                    source={{
                                        uri: activeStack === 'A' ? stackA[currentIndex]?.url : stackB[currentIndex]?.url,
                                    }}
                                    style={styles.catImage}
                                />

                                {/* Info Box */}
                                <View style={styles.infoBox}>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.catName}>
                                            {activeStack === 'A'
                                                ? stackA[currentIndex]?.breeds?.[0]?.name || 'Unknown'
                                                : stackB[currentIndex]?.breeds?.[0]?.name || 'Unknown'}
                                        </Text>
                                        <Text style={styles.catOrigin}>
                                            {activeStack === 'A'
                                                ? stackA[currentIndex]?.breeds?.[0]?.origin || 'Unknown'
                                                : stackB[currentIndex]?.breeds?.[0]?.origin || 'Unknown'}
                                        </Text>
                                    </View>
                                    <Text style={styles.catAge}>3</Text>
                                </View>

                                {/* Swipe Indicators */}
                                {swipeText !== '' && (
                                    <Animated.View
                                        style={[
                                            styles.swipeBox,
                                            swipeText === 'LIKE' ? styles.likeBox : styles.nopeBox,
                                            { opacity: swipeOpacity },
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                styles.swipeText,
                                                swipeText === 'LIKE' ? styles.likeText : styles.nopeText,
                                            ]}
                                        >
                                            {swipeText}
                                        </Text>
                                    </Animated.View>
                                )}
                            </Animated.View>
                        </>
                    )}

                </View>
            </PanGestureHandler>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.actionButton, styles.dislikeButton]}
                    onPress={() => handleButtonPress('left')}
                >
                    <Icon name="close" size={36} color="#EC6E6E" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.actionButton, styles.likeButton]}
                    onPress={() => handleButtonPress('right')}
                >
                    <Icon name="favorite" size={36} color="#75C882" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreen;
