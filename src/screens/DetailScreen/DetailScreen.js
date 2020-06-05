import React from 'react'
import { View, Text } from 'react-native'
import StarFilled from 'assets/icons/star-black.svg'
import StarOutlined from 'assets/icons/star-regular.svg'
import ShareIcon from 'assets/icons/share-alt-solid.svg'
import {
    Root,
    ImageContainer,
    Poster,
    PosterImage,
    Content,
    RatingsTab,
    Tab,
    TabTextPrimary,
    TabTextSecodary,
    RatingBox,
    RatingBoxText
} from './DetailScreen.style'

const DetailScreen = () => {
    return (
        <Root>
            <ImageContainer>
                <Poster>
                    <PosterImage source={require('assets/images/ford_poster.jpg')} />
                </Poster>
                {/* <RatingsTab>
                    {/* <Tab>
                        <ShareIcon width={24} height={24} fill="#000" />
                        <TabTextPrimary>Share</TabTextPrimary>
                    </Tab>
                    <Tab>
                        <RatingBox>
                            <RatingBoxText>7.5/10</RatingBoxText>
                        </RatingBox>
                        <TabTextPrimary>Ratings</TabTextPrimary>
                    </Tab>
                </RatingsTab> */}
            </ImageContainer>
            <Content>
                <Text>Contetn</Text>
            </Content>
        </Root>
    )
}

export default DetailScreen
