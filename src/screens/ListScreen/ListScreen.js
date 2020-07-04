import React from 'react'
import { CardSwiper, Card } from 'components'
import { Root, ScrollView } from './ListScreen.style'

const ListScreen = ({ data }) => {
    return (
        <Root>
            <ScrollView>
                <CardSwiper title="Top Rated" titleSub="Best of the best" Card={Card} data={data.topRatedMovies} />
                <CardSwiper title="Upcoming" titleSub="Planning is everything" Card={Card} data={data.upcomingMovies} />
                <CardSwiper
                    title="Popular"
                    titleSub="See what others like to watch"
                    Card={Card}
                    data={data.popularMovies}
                />
                <CardSwiper
                    title="In Cinemas"
                    titleSub="Call your buddies and go"
                    Card={Card}
                    data={data.nowPlayingMovies}
                />
            </ScrollView>
        </Root>
    )
}

export default ListScreen
