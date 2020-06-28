import styled from '@emotion/native'
import { HEADER_MIN_HEIGHT } from 'consts'

const Root = styled.SafeAreaView(({ theme }) => ({
    flex: 1,
    backgroundColor: theme.colors.background
}))

const ScrollView = styled.ScrollView({
    flex: 1
})

const HeaderRoot = styled.SafeAreaView(({ theme }) => ({
    backgroundColor: theme.colors.background
}))

const Header = styled.View(({ theme }) => ({
    height: HEADER_MIN_HEIGHT,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.setSpacing(1),
    backgroundColor: theme.colors.background
}))

export { Root, HeaderRoot, Header, ScrollView }
