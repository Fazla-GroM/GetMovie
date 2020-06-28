import React from 'react'
import MenuIcon from 'assets/icons/menu-24px.svg'
import SearchIcon from 'assets/icons/search-24px.svg'
import { Fab, Header } from 'components'

const ListHeader = () => {
    return (
        <Header>
            <Fab small onPress={() => alert('pressed')}>
                <MenuIcon fill="#fff" />
            </Fab>
            <Fab small onPress={() => alert('pressed')}>
                <SearchIcon fill="#fff" />
            </Fab>
        </Header>
    )
}

export default ListHeader
