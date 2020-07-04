import styled from '@emotion/native'
import Animated from 'react-native-reanimated'
import LinearGradient from 'react-native-linear-gradient'

const Root = styled.View(({ safeAreaInsetBottom, theme }) => ({
    flex: 1,
    backgroundColor: theme.colors.background,
    position: 'relative',
    paddingBottom: safeAreaInsetBottom
}))

const HeaderButtonHolder = styled.View(({ theme }) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: theme.setSpacing(12)
}))

const ImageHolder = styled(Animated.View)(({ height, opacity, backgroundColor }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    height,
    opacity,
    backgroundColor,
    overflow: 'hidden'
}))

const Image = styled(Animated.Image)(({ opacity, translateY, height }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height,
    width: null,
    resizeMode: 'cover',
    opacity,
    transform: [{ translateY }]
}))

const Gradient = styled(LinearGradient)({
    flex: 1
})

const ScrollView = styled.ScrollView(({ theme }) => ({
    flex: 1
}))

const ScrollViewContent = styled.View(({ marginTop }) => ({
    marginTop
}))

const Container = styled.View(({ border, row, theme }) => ({
    marginVertical: theme.setSpacing(2),
    paddingHorizontal: border ? null : theme.setSpacing(2),
    flexDirection: row ? 'row' : 'column',
    paddingVertical: border ? theme.setSpacing(2) : null,
    borderTopColor: border ? theme.colors.divider : null,
    borderBottomColor: border ? theme.colors.divider : null,
    borderTopWidth: border ? 0.6 : null,
    borderBottomWidth: border ? 0.6 : null
}))

const Box = styled.View(({ leftBorder, rightBorder, theme }) => ({
    borderRightWidth: rightBorder ? 0.6 : null,
    borderLeftWidth: leftBorder ? 0.6 : null,
    borderColor: theme.colors.divider,
    padding: theme.setSpacing(1),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
}))

const Title = styled.Text(({ theme }) => ({
    ...theme.fontWeight.bold,
    color: theme.colors.textPrimary,
    fontSize: 26
}))

const Text = styled.Text(({ secondary, spacing, theme }) => ({
    color: secondary ? theme.colors.textSecondary : theme.colors.textPrimary,
    ...(secondary ? theme.fontWeight.regular : theme.fontWeight.semiBold),
    fontSize: secondary ? 14 : 18,
    marginTop: spacing ? theme.setSpacing(1) : null
}))

export {
    Root,
    HeaderButtonHolder,
    Image,
    ImageHolder,
    Gradient,
    ScrollView,
    ScrollViewContent,
    Container,
    Box,
    Title,
    Text
}
