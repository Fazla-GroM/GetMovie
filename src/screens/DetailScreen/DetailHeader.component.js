import React from 'react'
import BackIcon from 'assets/icons/arrow_back_ios-24px.svg'
import ShareIcon from 'assets/icons/share-24px.svg'
import LikeIcon from 'assets/icons/favorite-24px.svg'
import { Fab, Header } from 'components'
import { HeaderButtonHolder } from './DetailScreen.style'

const DetailHeader = ({ navigation, ...rest }) => {
    return (
        <Header transparent>
            <Fab small onPress={navigation.goBack}>
                <BackIcon fill="#fff" />
            </Fab>
            <HeaderButtonHolder>
                <Fab small onPress={navigation.goBack}>
                    <ShareIcon fill="#fff" />
                </Fab>
                <Fab small onPress={navigation.goBack}>
                    <LikeIcon fill="#fff" />
                </Fab>
            </HeaderButtonHolder>
        </Header>
    )
}

export default DetailHeader
