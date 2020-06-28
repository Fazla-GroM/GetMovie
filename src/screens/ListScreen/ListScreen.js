import React from 'react'
import movieImage from 'assets/images/ford_poster.jpg'
import MenuIcon from 'assets/icons/menu-24px.svg'
import SearchIcon from 'assets/icons/search-24px.svg'
import { CardSwiper, Card, Fab } from 'components'
import { Root, Header, ScrollView } from './ListScreen.style'

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

const ListScreen = props => {
    return (
        <Root>
            {/* <Header>
                <Fab small onPress={() => alert('pressed')}>
                    <MenuIcon fill="#fff" />
                </Fab>
                <Fab small onPress={() => alert('pressed')}>
                    <SearchIcon fill="#fff" />
                </Fab>
            </Header> */}
            <ScrollView>
                <CardSwiper Card={Card} data={fakeData} />
                <CardSwiper Card={Card} data={fakeData} />
                <CardSwiper Card={Card} data={fakeData} />
                <CardSwiper Card={Card} data={fakeData} />
            </ScrollView>
        </Root>
    )
}

export default ListScreen
