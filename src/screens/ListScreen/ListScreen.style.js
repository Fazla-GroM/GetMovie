import styled from '@emotion/native'
import Animated from 'react-native-reanimated'

const HEADER_MAX_HEIGHT = 200
const HEADER_MIN_HEIGHT = 60
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

const Root = styled.View(({ theme }) => ({
    flex: 1
}))

const ScrollContainer = styled.ScrollView(({ theme }) => ({
    flex: 1
}))

const Row = styled.View({
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center'
})

const Header = styled(Animated.View)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden'
})

const HeaderBar = styled.View({
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
})

const Title = styled.Text({
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18
})

const ScrollViewContent = styled.View({
    marginTop: HEADER_MAX_HEIGHT
})

export { Root, ScrollContainer, Row, Header, HeaderBar, Title, ScrollViewContent }
