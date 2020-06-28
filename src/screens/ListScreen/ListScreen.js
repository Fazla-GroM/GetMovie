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
            <ScrollView>
                <CardSwiper title="Top Rated" titleSub="Best of the best" Card={Card} data={fakeData} />
                <CardSwiper title="Upcoming" titleSub="Planning is everything" Card={Card} data={fakeData} />
                <CardSwiper title="Popular" titleSub="See what others like to watch" Card={Card} data={fakeData} />
                <CardSwiper title="In Cinemas" titleSub="Call your buddies and go" Card={Card} data={fakeData} />
            </ScrollView>
        </Root>
    )
}

export default ListScreen
