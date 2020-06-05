import React, { useEffect, useMemo } from 'react'
import { ScrollView, View, Text } from 'react-native'
import Animated from 'react-native-reanimated'
import { useValue, useValues } from 'react-native-redash'
import { Root, ScrollContainer, Row, ScrollViewContent, Header, HeaderBar, Title } from './ListScreen.style'

const renderScrollViewContent = () => {
    const data = Array.from({ length: 10 })
    return (
        <ScrollViewContent>
            {data.map((_, i) => (
                <Row key={i}>
                    <Text>{i}</Text>
                </Row>
            ))}
        </ScrollViewContent>
    )
}

const HEADER_MAX_HEIGHT = 200
const HEADER_MIN_HEIGHT = 60
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

const ListScreen = () => {
    const value = useValue(0)

    const headerHeight = value.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
    })

    return (
        <Root>
            <ScrollContainer scrollEventThrottle={16} onScroll={e => value.setValue(e.nativeEvent.contentOffset.y)}>
                {renderScrollViewContent()}
            </ScrollContainer>
            <Header style={{ height: headerHeight }}>
                <HeaderBar>
                    <Title>Title</Title>
                </HeaderBar>
            </Header>
        </Root>
    )
}

export default ListScreen
