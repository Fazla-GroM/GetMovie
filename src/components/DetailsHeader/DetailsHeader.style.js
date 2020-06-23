import styled from '@emotion/native'
import Animated from 'react-native-reanimated'
import { HEADER_MAX_HEIGHT } from 'consts'

const AnimatedHeaderRoot = styled(Animated.View)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
})

const HeaderBar = styled.View({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
})

const HeaderImageHolder = styled.View({
    position: 'relative',
    flex: 1,
    overflow: 'hidden'
})

const AnimatedHeaderImage = styled(Animated.Image)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover'
})

const HeaderBtnBox = styled(Animated.View)({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
})

const BackBtnHolder = styled.View({
    position: 'absolute',
    top: 8,
    left: 16
})

export { AnimatedHeaderRoot, HeaderBar, HeaderImageHolder, AnimatedHeaderImage, HeaderBtnBox, BackBtnHolder }
