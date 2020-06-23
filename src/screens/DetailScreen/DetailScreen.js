import React, { useRef } from 'react'
import { ScrollView } from 'react-native'
import Animated from 'react-native-reanimated'
import { DetailsHeader } from 'components'
import {
    Root,
    ScrollContainer,
    ScrollViewContent,
    Title,
    Chip,
    ChipText,
    InfoBox,
    InfoText,
    PlotBox,
    PlotTitle,
    PlotText,
    CastBox,
    CastTitle,
    CastCardRoot,
    CardImageHolder,
    CastNameText,
    CastRoleText
} from './DetailScreen.style'

const fakeCast = [
    {
        id: '1',
        name: 'James Mangold',
        role: 'Director'
    },
    {
        id: '2',
        name: 'Matt Damon',
        role: 'Caroll'
    },
    {
        id: '3',
        name: 'Christian Bale',
        role: 'Ken Miles'
    },
    {
        id: '4',
        name: 'Caitriona Balfe',
        role: 'Mollie'
    }
]

const fakeChips = [
    { id: '1', title: 'Action' },
    { id: '2', title: 'Biography' },
    { id: '3', title: 'Drama' }
]

const DetailScreen = ({ navigation }) => {
    const scrollValue = useRef(new Animated.Value(0)).current

    return (
        <Root>
            <ScrollContainer
                scrollEventThrottle={100}
                onScroll={e => scrollValue.setValue(e.nativeEvent.contentOffset.y)}>
                <ScrollViewContent>
                    <Title>Ford v Ferrari</Title>
                    <InfoBox>
                        <InfoText>2019</InfoText>
                        <InfoText>PG-13</InfoText>
                        <InfoText>2h 32min</InfoText>
                    </InfoBox>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 48 }}>
                        {fakeChips.map(chip => (
                            <Chip key={chip.id}>
                                <ChipText>{chip.title}</ChipText>
                            </Chip>
                        ))}
                    </ScrollView>
                    <PlotBox>
                        <PlotTitle>Plot Summary</PlotTitle>
                        <PlotText>
                            American car designer Carroll Shelby and driver Kn Miles battle corporate interference and
                            the laws of physics to build a revolutionary race car for Ford in order.
                        </PlotText>
                    </PlotBox>
                    <CastBox>
                        <CastTitle>Cast & Crew</CastTitle>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {fakeCast.map(item => (
                                <CastCardRoot key={item.id}>
                                    <CardImageHolder />
                                    <CastNameText>{item.name}</CastNameText>
                                    <CastRoleText>{item.role}</CastRoleText>
                                </CastCardRoot>
                            ))}
                        </ScrollView>
                    </CastBox>
                </ScrollViewContent>
            </ScrollContainer>
            <DetailsHeader scrollValue={scrollValue} navigation={navigation} />
        </Root>
    )
}

export default DetailScreen
