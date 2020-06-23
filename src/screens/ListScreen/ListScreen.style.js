import styled from '@emotion/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Root = styled.View({
    flex: 1,
    backgroundColor: '#fff'
})

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity)

const Fab = styled(AnimatedButton)({
    width: 40,
    height: 40,
    backgroundColor: '#666',
    borderRadius: 50
})

const One = styled.View(({ theme }) => ({
    flex: 1,
    backgroundColor: '#222'
}))

const Two = styled.View(({ theme }) => ({
    flex: 1,
    backgroundColor: '#555'
}))

const Three = styled.View({
    flex: 6,
    backgroundColor: '#999'
})
export { Root, Fab, One, Two, Three }
