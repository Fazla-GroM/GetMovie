import styled from '@emotion/native'
import Animated from 'react-native-reanimated'

const Root = styled.View(({ theme }) => ({
    flex: 1,
    backgroundColor: theme.colors.background,
    position: 'relative'
}))

const HeaderButtonHolder = styled.View(({ theme }) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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

const ScrollView = styled.ScrollView(({ theme }) => ({
    flex: 1
}))

const ScrollViewContent = styled.View(({ marginTop }) => ({
    marginTop
}))

export { Root, HeaderButtonHolder, Image, ImageHolder, ScrollView, ScrollViewContent }
