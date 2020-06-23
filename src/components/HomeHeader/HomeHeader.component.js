import React from 'react'
import MenuIcon from 'assets/icons/menu-24px.svg'
import SearchIcon from 'assets/icons/search-24px.svg'
import { Fab } from 'components/Fab'
import { useTheme } from 'emotion-theming'
import { Root } from './HomeHeader.style'

const HomeHeader = ({ navigation }) => {
    const theme = useTheme()

    return (
        <Root>
            <Fab small style={{ backgroundColor: '#fff' }} onPress={() => navigation.toggleDrawer()}>
                <MenuIcon fill={theme.colors.black} />
            </Fab>
            <Fab small style={{ backgroundColor: '#fff' }}>
                <SearchIcon fill={theme.colors.black} onPress={() => navigation.navigate('Details')} />
            </Fab>
        </Root>
    )
}

export default HomeHeader
