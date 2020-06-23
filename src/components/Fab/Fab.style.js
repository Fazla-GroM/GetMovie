import styled from '@emotion/native'
import Animated from 'react-native-reanimated'
import { BaseButton } from 'react-native-gesture-handler'

const AnimatedButton = Animated.createAnimatedComponent(BaseButton)

const TouchableRoot = styled(AnimatedButton)(({ small, theme }) => ({
    width: small ? 40 : 56,
    height: small ? 40 : 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
}))

export { TouchableRoot }
