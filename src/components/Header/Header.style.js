import styled from '@emotion/native'
import { HEADER_MIN_HEIGHT } from 'consts'

const Root = styled.SafeAreaView(({ transparent, theme }) => ({
    backgroundColor: transparent ? 'transparent' : theme.colors.background
}))

const Toolbar = styled.View(({ theme }) => ({
    height: HEADER_MIN_HEIGHT,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.setSpacing(1)
    // backgroundColor: theme.colors.background
}))

export { Root, Toolbar }
