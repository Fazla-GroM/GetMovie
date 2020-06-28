import styled from '@emotion/native'
import LinearGradient from 'react-native-linear-gradient'

const Root = styled.View(({ theme }) => ({
    borderRadius: theme.borderRadius,
    overflow: 'hidden',
    position: 'relative',
    aspectRatio: 4 / 5,
    width: 160
}))

const Image = styled.Image({
    width: null,
    height: null,
    resizeMode: 'cover',
    flex: 1
})

const Gradient = styled(LinearGradient)(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: theme.setSpacing(1),
    justifyContent: 'flex-end'
}))

const Title = styled.Text(({ theme }) => ({
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontWeight: '700'
}))

export { Root, Image, Gradient, Title }
