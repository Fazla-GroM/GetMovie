import styled from '@emotion/native'
import Animated from 'react-native-reanimated'

const Root = styled.TouchableHighlight(({ small, theme }) => ({
    width: small ? 40 : 56,
    height: small ? 40 : 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
}))

export { Root }
