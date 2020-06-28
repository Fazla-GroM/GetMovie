import styled from '@emotion/native'

const Root = styled.View({
    width: 100,
    minHeight: 100,
    alignItems: 'center'
    // backgroundColor: '#999'
})

const ImageHolder = styled.View({
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden'
})

const Image = styled.Image({
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover'
})
const TextBox = styled.View(({ theme }) => ({
    marginTop: theme.setSpacing(2)
}))

const Text = styled.Text(({ secondary, theme }) => ({
    color: secondary ? theme.colors.textSecondary : theme.colors.textPrimary,
    ...(secondary ? theme.fontWeight.regular : theme.fontWeight.semiBold),
    fontSize: secondary ? 14 : 18,
    textAlign: 'center'
}))

export { Root, ImageHolder, Image, TextBox, Text }
