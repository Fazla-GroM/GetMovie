import styled from '@emotion/native'
import LinearGradient from 'react-native-linear-gradient'

const Root = styled.View(({ theme }) => ({
    flex: 1
}))

const ImageBackground = styled.ImageBackground({
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
})

const Gradient = styled(LinearGradient)({
    flex: 1
})

export { Root, ImageBackground, Gradient }
