import Animated from 'react-native-reanimated'
import styled from '@emotion/native'

const Root = styled.View(({ spacing, theme }) => ({
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomColor: theme.colors.pink,
    borderBottomWidth: 2,
    paddingHorizontal: theme.setSpacing(2),
    paddingTop: 20,
    paddingBottom: theme.setSpacing(1),
    marginVertical: spacing ? theme.setSpacing(1) : null,
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
}))
const Input = styled.TextInput(({ theme }) => ({
    height: 20,
    fontSize: 16,
    color: theme.colors.black
}))

const Label = styled(Animated.Text)(({ theme }) => ({
    color: theme.colors.pink,
    position: 'absolute',
    left: 16,
    fontWeight: '600'
}))

export { Root, Input, Label }
