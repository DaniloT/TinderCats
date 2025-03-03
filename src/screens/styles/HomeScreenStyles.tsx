import { StyleSheet } from 'react-native';
import {COLORS} from '../../constants/colors';

const HomeScreenStyles = StyleSheet.create<{
    container: object,
    catImageContainer: object,
    topCard: object,
    catImage: object,
    nextImage: object,
    loadingSpinner: object,
    imageWrapper: object,
    infoBox: object,
    textContainer: object,
    catName: object,
    catOrigin: object,
    catAge: object,
    buttonContainer: object,
    actionButton: object,
    dislikeButton: object,
    likeButton: object,
    swipeBox: object,
    likeBox: object,
    nopeBox: object,
    swipeText: object,
    likeText: object,
    nopeText: object,
    noMoreCats: object
}>({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.whiteBackground,  // Set the background color to whiteBackground
    },
    catImageContainer: {
        width: '90%',
        aspectRatio: 3.7 / 4,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: COLORS.white,  // Using white color for background
        marginTop: -60,
        alignSelf: 'center',
        shadowColor: COLORS.grayText,  // Gray text for shadow
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topCard: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    catImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    nextImage: {
        position: 'absolute',
        opacity: 0.6,
    },
    loadingSpinner: {
        position: 'absolute',
    },
    imageWrapper: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    infoBox: {
        position: 'absolute',
        bottom: -15,  // Partially cut at bottom
        left: 20,
        right: 20,
        backgroundColor: COLORS.white,  // Use white for infoBox background
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingTop: 5,
        paddingBottom: 22,
        height: 80,  // Ensures it's a rectangle
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    catName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.blackText,  // Use blackText for cat name
        marginBottom: 2,
    },
    catOrigin: {
        fontSize: 14,
        color: COLORS.grayText,  // Use grayText for cat origin
    },
    catAge: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.grayText,  // Use grayText for cat age
        position: 'absolute',  // Aligns within infoBox
        top: 5,  // Aligns with name text
        right: 15,  // Pushes to the right
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '60%',
        marginTop: 40,
    },
    actionButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: COLORS.grayText,  // Using grayText for shadow color
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 16,
    },
    dislikeButton: {
        backgroundColor: COLORS.white,  // White background for dislike button
    },
    likeButton: {
        backgroundColor: COLORS.white,  // White background for like button
    },
    swipeBox: {
        position: 'absolute',
        top: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 5,
        borderColor: COLORS.white,  // White color for swipe box border
    },
    likeBox: {
        left: 30,
        transform: [{ rotate: '-15deg' }],
        borderColor: COLORS.greenMatch,  // Use greenMatch color for like box
    },
    nopeBox: {
        right: 30,
        transform: [{ rotate: '15deg' }],
        borderColor: COLORS.redMatch,  // Use redMatch color for nope box
    },
    swipeText: {
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    likeText: {
        color: COLORS.greenMatch,  // Use greenMatch color for like text
    },
    nopeText: {
        color: COLORS.redMatch,  // Use redMatch color for nope text
    },
    noMoreCats: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.grayText,  // Use grayText color for "No more cats" text
        textAlign: 'center',
        marginTop: 20,
    },
});

export default HomeScreenStyles;
