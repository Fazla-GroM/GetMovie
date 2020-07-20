import React from 'react'
import { Avatar } from 'components/Avatar'
import { useUser } from 'hooks'
import { Button } from 'components/Button'
import LoginIcon from 'assets/icons/login-24dp.svg'
import { useTheme } from 'emotion-theming'
import { Root, UserDisplay, Gretting, Name, Email, Divider, ButtonHolder } from './DrawerContent.style'
import RouteList from './RouteList.component'

const DrawerContent = props => {
    const theme = useTheme()
    const user = useUser()

    return (
        <Root>
            <UserDisplay>
                <Avatar name={user.fullName} image={user.image} />
                <Gretting>
                    <Name>{user.fullName}</Name>
                    <Email>{user.eMail}</Email>
                </Gretting>
            </UserDisplay>
            <Divider />
            <RouteList {...props} />
            <Divider />
            <ButtonHolder>
                <Button
                    text="Log Out"
                    endAdornment={<LoginIcon fill={theme.colors.textPrimary} />}
                    onPress={() => alert('Log Out')}
                />
            </ButtonHolder>
        </Root>
    )
}

export default DrawerContent
