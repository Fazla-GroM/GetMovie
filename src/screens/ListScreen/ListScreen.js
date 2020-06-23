import React, { useEffect, useRef, useMemo } from 'react'
import { Text, FlatList, View, StyleSheet, Dimensions, Image } from 'react-native'
import movieImage from 'assets/images/ford_poster.jpg'
import Animated from 'react-native-reanimated'
import { Root, One, Two, Three } from './ListScreen.style'

const fakeData = [
    {
        id: 1,
        title: 'Film 1',
        image: movieImage
    },
    {
        id: 2,
        title: 'Film 2',
        image: movieImage
    },
    {
        id: 3,
        title: 'Film 3',
        image: movieImage
    },
    {
        id: 4,
        title: 'Film 4',
        image: movieImage
    },
    {
        id: 5,
        title: 'Film 5',
        image: movieImage
    },
    {
        id: 6,
        title: 'Film 6',
        image: movieImage
    }
]
const { width, height } = Dimensions.get('window')
const DEFAULT_CARD_HEIGHT = height - 80
const DEFAULT_CARD_WIDTH = width - 80

const styles = StyleSheet.create({
    card: {
        width: DEFAULT_CARD_WIDTH,
        height: DEFAULT_CARD_HEIGHT,
        padding: 20
    },
    cardImage: {
        width: null,
        height: null,
        flex: 1,
        resizeMode: 'cover'
    }
})
const Card = ({ item, index, x }) => {
    console.log(index)
    const position = Animated.sub(index * DEFAULT_CARD_WIDTH, x)
    const rotate = Animated.interpolate(position, {
        inputRange: [0, DEFAULT_CARD_WIDTH + 20],
        outputRange: [0, 0],
        extrapolate: 'clamp'
    })

    const translateX = Animated.add(
        x,
        x.interpolate({
            inputRange: [0, index === 0 ? DEFAULT_CARD_WIDTH : DEFAULT_CARD_WIDTH * index],
            outputRange: [0, -DEFAULT_CARD_WIDTH * index]
        })
    )

    return (
        <Animated.View style={[styles.card, { transform: [{ rotate }] }]}>
            <Image source={item.image} style={styles.cardImage} />
        </Animated.View>
    )
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const ListScreen = props => {
    const x = useRef(new Animated.Value(0)).current

    const onScroll = Animated.event(
        [
            {
                nativeEvent: { contentOffset: { x } }
            }
        ],
        { useNativeDriver: true }
    )
    return (
        <Root>
            <One />
            <Two />
            <Three />
            {/* <AnimatedFlatList
                // snapToInterval={DEFAULT_CARD_WIDTH} // Adjust to your content width
                // snapToOffsets={fakeData.map(item => DEFAULT_CARD_WIDTH)}
                // snapToAlignment="center"
                // contentOffset={{ x: 80 }}
                // pagingEnabled
                horizontal
                scrollEventThrottle={16}
                bounces={false}
                data={fakeData}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => <Card {...{ index, item, x }} />}
                {...{ onScroll }}
            /> */}
        </Root>
    )
}

export default ListScreen
