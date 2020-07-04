import React, { useRef } from 'react'
import { useWindowDimensions, ScrollView as RNScrollView } from 'react-native'
import { useTheme } from 'emotion-theming'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated from 'react-native-reanimated'
import { interpolateColor } from 'react-native-redash'
import { Card, CastCard, CardSwiper, Chip } from 'components'
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

const DetailScreen = ({ navigation, data }) => {
    console.log(data)
    const { height } = useWindowDimensions()
    const { top: safeAreaInsetTop, bottom: safeAreaInsetBottom } = useSafeAreaInsets()
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
        <Root safeAreaInsetBottom={safeAreaInsetBottom}>
            <ScrollView scrollEventThrottle={100} onScroll={e => scrollValue.setValue(e.nativeEvent.contentOffset.y)}>
                <ScrollViewContent marginTop={IMAGE_HEIGHT}>
                    <Container>
                        <Title>{data.title}</Title>
                    </Container>
                    <RNScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginVertical: theme.setSpacing(1) }}
                        contentContainerStyle={{
                            paddingHorizontal: theme.setSpacing(1)
                        }}>
                        {data?.genres?.map(chip => (
                            <Chip text={chip.name} key={chip.id} />
                        ))}
                    </RNScrollView>
                    <Container border row>
                        <Box rightBorder>
                            <Text secondary>Length</Text>
                            <Text spacing>{data.runtime} min</Text>
                        </Box>
                        <Box>
                            <Text secondary>Language</Text>
                            {data?.spoken_languages?.map(lang => (
                                <Text spacing key={lang.name}>
                                    {lang.name}
                                </Text>
                            ))}
                        </Box>
                        <Box leftBorder>
                            <Text secondary>Year</Text>
                            <Text spacing>{data.release_date}</Text>
                        </Box>
                    </Container>
                    <Container>
                        <Text>Storyline</Text>
                        <Text secondary spacing style={{ lineHeight: 24 }}>
                            {data.overview}
                        </Text>
                    </Container>
                    <CardSwiper
                        title="Cast"
                        titleSub="Find out who is who"
                        Card={CastCard}
                        data={data?.credits?.cast}
                    />
                    {data.collection && (
                        <CardSwiper
                            title={data.collection.name}
                            titleSub="sdd"
                            Card={Card}
                            data={data.collection.parts}
                        />
                    )}
                </ScrollViewContent>
            </ScrollView>
            <ImageHolder height={headerHeight} backgroundColor={backgroundColor}>
                <Image
                    source={{
                        uri: `https://image.tmdb.org/t/p/w780${data.backdrop_path}`
                    }}
                    opacity={opacity}
                    translateY={translateY}
                    height={IMAGE_MAX_HEIGHT}
                />
            </ImageHolder>
        </Root>
    )
}

export default DetailScreen
