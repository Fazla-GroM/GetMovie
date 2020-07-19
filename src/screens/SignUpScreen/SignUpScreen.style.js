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

const Gradient = styled(LinearGradient)(({ theme }) => ({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
}))

const Container = styled.KeyboardAvoidingView(({ theme }) => ({
    width: '70%',
    height: '60%',
    justifyContent: 'space-between'
}))

const Box = styled.View(({ border, theme }) => ({
    flexDirection: 'row'
}))

const Bar = styled.View(({ theme }) => ({
    width: 8,
    alignSelf: 'stretch',
    backgroundColor: theme.colors.pink,
    borderRadius: theme.borderRadius,
    marginRight: 8
}))

const Text = styled.Text(({ title, theme }) => ({
    color: title ? theme.colors.white : theme.colors.textPrimary,
    fontSize: title ? 40 : 30,
    ...(title ? theme.fontWeight.bold : theme.fontWeight.regular)
}))

export { Root, ImageBackground, Gradient, Container, Box, Bar, Text }
