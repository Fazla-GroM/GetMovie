import React, { useRef } from 'react'
import { useWindowDimensions, ScrollView as RNScrollView } from 'react-native'
import { useTheme } from 'emotion-theming'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated from 'react-native-reanimated'
import { interpolateColor } from 'react-native-redash'
import { Card, CastCard, CardSwiper, Chip } from 'components'
import movieImage from 'assets/images/ford_poster.jpg'
import { HEADER_MIN_HEIGHT } from 'consts'
import {
    Root,
    Image,
    ImageHolder,
    ScrollView,
    ScrollViewContent,
    Container,
    Title,
    Box,
    Text
} from './DetailScreen.style'

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

const fakeCast = [
    {
        id: '1',
        name: 'James Mangold',
        character: 'Director'
    },
    {
        id: '2',
        name: 'Matt Damon',
        character: 'Caroll'
    },
    {
        id: '3',
        name: 'Christian Bale',
        character: 'Ken Miles'
    },
    {
        id: '4',
        name: 'Caitriona Balfe',
        character: 'Mollie'
    }
]

const fakeChips = [
    { id: '1', title: 'Action' },
    { id: '2', title: 'Biography' },
    { id: '3', title: 'Drama' }
]

const DetailScreen = ({ navigation }) => {
    const { height } = useWindowDimensions()
    const { top: safeAreaInsetTop } = useSafeAreaInsets()
    const theme = useTheme()
    const scrollValue = useRef(new Animated.Value(0)).current
    const IMAGE_HEIGHT = height / 2.2
    const IMAGE_MAX_HEIGHT = IMAGE_HEIGHT
    const IMAGE_MIN_HEIGHT = HEADER_MIN_HEIGHT + safeAreaInsetTop
    const IMAGE_SCROLL_DISTANCE = IMAGE_MAX_HEIGHT - IMAGE_MIN_HEIGHT

    const headerHeight = scrollValue.interpolate({
        inputRange: [0, IMAGE_SCROLL_DISTANCE],
        outputRange: [IMAGE_MAX_HEIGHT, IMAGE_MIN_HEIGHT],
        extrapolate: 'clamp'
    })

    const backgroundColor = interpolateColor(scrollValue, {
        inputRange: [0, IMAGE_SCROLL_DISTANCE],
        outputRange: ['transparent', theme.colors.background]
    })

    const opacity = scrollValue.interpolate({
        inputRange: [0, IMAGE_SCROLL_DISTANCE / 2, IMAGE_SCROLL_DISTANCE],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp'
    })

    const translateY = scrollValue.interpolate({
        inputRange: [0, IMAGE_SCROLL_DISTANCE],
        outputRange: [0, -50],
        extrapolate: 'clamp'
    })
    return (
        <Root>
            <ScrollView scrollEventThrottle={100} onScroll={e => scrollValue.setValue(e.nativeEvent.contentOffset.y)}>
                <ScrollViewContent marginTop={IMAGE_HEIGHT}>
                    <Container>
                        <Title>Im a Movie</Title>
                    </Container>
                    <RNScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginVertical: theme.setSpacing(1) }}
                        contentContainerStyle={{
                            paddingHorizontal: theme.setSpacing(1)
                        }}>
                        {fakeChips.map(chip => (
                            <Chip text={chip.title} key={chip.id} />
                        ))}
                    </RNScrollView>
                    <Container border row>
                        <Box rightBorder>
                            <Text secondary>Length</Text>
                            <Text spacing>139 min</Text>
                        </Box>
                        <Box>
                            <Text secondary>Language</Text>
                            <Text spacing>English</Text>
                        </Box>
                        <Box leftBorder>
                            <Text secondary>Year</Text>
                            <Text spacing>2003</Text>
                        </Box>
                    </Container>
                    <Container>
                        <Text>Storyline</Text>
                        <Text secondary spacing style={{ lineHeight: 24 }}>
                            A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression
                            into a shocking new form of therapy. Their concept catches on, with underground fight clubs
                            forming in every town, until an eccentric gets in the way and ignites an out-of-control
                            spiral toward oblivion
                        </Text>
                    </Container>
                    <CardSwiper title="Cast" titleSub="Find out who is who" Card={CastCard} data={fakeCast} />
                </ScrollViewContent>
            </ScrollView>
            <ImageHolder height={headerHeight} backgroundColor={backgroundColor}>
                <Image source={movieImage} opacity={opacity} translateY={translateY} height={IMAGE_MAX_HEIGHT} />
            </ImageHolder>
        </Root>
    )
}

export default DetailScreen
