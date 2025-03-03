import { StyleSheet } from 'react-native';

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
        backgroundColor: 'white',
    },
    catImageContainer: {
        width: '90%',
        aspectRatio: 3.7 / 4,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        marginTop: -60,
        alignSelf: 'center',
        shadowColor: '#000000CC',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 10,
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
        bottom: -15, // Partially cut at bottom
        left: 20,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingTop: 5,
        paddingBottom: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        height: 80, // Ensures it's a rectangle
    },

    textContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    catName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 2,
    },

    catOrigin: {
        fontSize: 14,
        color: '#777',
    },

    catAge: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
        position: 'absolute', // Aligns within infoBox
        top: 5, // Aligns with name text
        right: 15, // Pushes to the right
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
        shadowColor: '#00000055',
        shadowOffset: { width: 0, height: 4 },
        elevation: 10,
    },
    dislikeButton: {
        backgroundColor: 'white',
    },
    likeButton: {
        backgroundColor: 'white',
    },
    swipeBox: {
        position: 'absolute',
        top: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 5,
        borderColor: 'white',
    },
    likeBox: {
        left: 30,
        transform: [{ rotate: '-15deg' }],
        borderColor: '#4DAF6F',
    },
    nopeBox: {
        right: 30,
        transform: [{ rotate: '15deg' }],
        borderColor: '#D14343',
    },
    swipeText: {
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    likeText: {
        color: '#4DAF6F',
    },
    nopeText: {
        color: '#D14343',
    },
    noMoreCats: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#777',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default HomeScreenStyles;
