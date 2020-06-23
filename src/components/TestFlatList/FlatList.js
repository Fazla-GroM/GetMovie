import React, { useEffect, useRef, useMemo } from 'react'
import { Text, FlatList, View, StyleSheet, Dimensions, Image } from 'react-native'
import movieImage from 'assets/images/ford_poster.jpg'
import Animated from 'react-native-reanimated'
import { Root } from './ListScreen.style'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

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

const { height: wHeight, width: wWidth } = Dimensions.get('window')
const CARD_MARGIN = 16
const DEFAULT_CARD_HEIGHT = 250
const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + CARD_MARGIN * 2
const CARD_WIDTH = wWidth - 40
const height = wHeight - 64

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: DEFAULT_CARD_HEIGHT,
        marginVertical: CARD_MARGIN,
        alignSelf: 'center',
        borderRadius: 10,
        overflow: 'hidden'
    },
    cardImage: {
        width: null,
        height: null,
        flex: 1,
        resizeMode: 'cover'
    }
})

const Card = ({ item, index, y }) => {
    const position = Animated.sub(index * CARD_HEIGHT, y)
    const isDisapearing = -CARD_HEIGHT
    const isTop = 0
    const isBottom = height - CARD_HEIGHT
    const isAppearing = height

    const translateY = Animated.add(
        Animated.add(
            y,
            y.interpolate({
                inputRange: [0, index * CARD_HEIGHT],
                outputRange: [0, -index * CARD_HEIGHT],
                extrapolateRight: 'clamp'
            })
        ),
        Animated.interpolate(position, {
            inputRange: [isBottom, isAppearing],
            outputRange: [0, -CARD_HEIGHT / 4],
            extrapolate: 'clamp'
        })
    )

    const scale = Animated.interpolate(position, {
        inputRange: [isDisapearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
        extrapolate: 'clamp'
    })

    const opacity = Animated.interpolate(position, {
        inputRange: [isDisapearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5]
    })

    return (
        <Animated.View style={[styles.card, { opacity }, { transform: [{ translateY }, { scale }] }]}>
            <Image style={styles.cardImage} source={item.image} />
        </Animated.View>
    )
}

const CardSwiper = props => {
    const y = useRef(new Animated.Value(0)).current

    const onScroll = Animated.event(
        [
            {
                nativeEvent: { contentOffset: { y } }
            }
        ],
        { useNativeDriver: true }
    )

    return (
        <AnimatedFlatList
            style={{ flex: 1 }}
            scrollEventThrottle={16}
            bounces={false}
            data={fakeData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => <Card {...{ index, item, y }} />}
            {...{ onScroll }}
        />
    )
}

const ListScreen = props => {
    return (
        <Root>
            <CardSwiper />
        </Root>
    )
}

export default ListScreen
