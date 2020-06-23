import React from 'react'
import PropTypes from 'prop-types'
import Animated from 'react-native-reanimated'
import { interpolateColor } from 'react-native-redash'
import { Svg, Path } from 'react-native-svg'
import { Fab } from 'components/Fab'
import { HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, HEADER_SCROLL_DISTANCE } from 'consts'
import {
    AnimatedHeaderRoot,
    HeaderBar,
    HeaderImageHolder,
    AnimatedHeaderImage,
    HeaderBtnBox,
    BackBtnHolder
} from './DetailsHeader.style'

const Sasa = ({ fill }) => {
    const AnimatedPath = Animated.createAnimatedComponent(Path)

    return (
        <Svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <AnimatedPath
                fill={fill}
                d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"
            />
        </Svg>
    )
}

const BackIcon = ({ fill }) => {
    const OuterPath = Animated.createAnimatedComponent(Path)
    const AnimatedPath = Animated.createAnimatedComponent(Path)

    return (
        <Svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <OuterPath d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
            <AnimatedPath
                fill={fill}
                d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
            />
        </Svg>
    )
}

// TODO: fix react native problem where touchables cannot be pressed when they have negative margin or position (FAB-s in this case)

const DetailsHeader = ({ scrollValue, navigation }) => {
    const headerHeight = scrollValue.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
    })

    const headerBackgroundColor = interpolateColor(scrollValue, {
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: ['transparent', '#03A9F4']
    })

    const imageOpacity = scrollValue.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp'
    })

    const imageTranslate = scrollValue.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -50],
        extrapolate: 'clamp'
    })

    const buttonsTranslate = scrollValue.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [-20, 8],
        extrapolate: 'clamp'
    })

    const buttonBoxWidth = scrollValue.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [104, 92, 88],
        extrapolate: 'clamp'
    })

    const buttonBoxRight = scrollValue.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [16, 6, 16],
        extrapolate: 'clamp'
    })
    const backgroundColor = interpolateColor(scrollValue, {
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: ['#fff', '#fff', '#03A9F4']
    })

    const fillColor = interpolateColor(scrollValue, {
        inputRange: [0, HEADER_SCROLL_DISTANCE / 4, HEADER_SCROLL_DISTANCE],
        outputRange: ['#03A9F4', '#03A9F4', '#fff']
    })

    const backButtonBackground = interpolateColor(scrollValue, {
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: ['rgba(255, 255, 255, 0.12)', 'rgba(255, 255, 255, 0.12)', '#03A9F4']
    })
    // TODO: set shadow transition for IOS
    const fabShadow = scrollValue.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [6, 0]
    })

    // TODO: set shadow transition for IOS
    const appBarElevation = scrollValue.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 0, 4]
    })
    return (
        <AnimatedHeaderRoot
            style={{ height: headerHeight, elevation: appBarElevation, backgroundColor: headerBackgroundColor }}>
            <HeaderImageHolder>
                <AnimatedHeaderImage
                    style={[{ opacity: imageOpacity, transform: [{ translateY: imageTranslate }] }]}
                    source={require('assets/images/ford_poster.jpg')}
                />
            </HeaderImageHolder>
            <HeaderBar>
                <BackBtnHolder>
                    <Fab
                        small
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.6}
                        style={{ backgroundColor: backButtonBackground }}>
                        <BackIcon fill={fillColor} />
                    </Fab>
                </BackBtnHolder>
                <HeaderBtnBox style={{ bottom: buttonsTranslate, width: buttonBoxWidth, right: buttonBoxRight }}>
                    <Fab small style={{ backgroundColor, elevation: fabShadow }}>
                        <Sasa fill={fillColor} />
                    </Fab>
                    <Fab small style={{ backgroundColor, borderRadius: 50, overflow: 'hidden', elevation: fabShadow }}>
                        <Sasa fill={fillColor} />
                    </Fab>
                </HeaderBtnBox>
            </HeaderBar>
        </AnimatedHeaderRoot>
    )
}

DetailsHeader.propTypes = {
    scrollValue: PropTypes.shape({
        interpolate: PropTypes.func
    }).isRequired
}

export default DetailsHeader

//     < AnimatedHeaderRoot
// style = {{ height: headerHeight, elevation: appBarElevation, backgroundColor: headerBackgroundColor }}>
//     <HeaderBar>
//         <BackBtnHolder>
//             <Fab small style={{ backgroundColor: backButtonBackground }}>
//                 <BackIcon fill={fillColor} />
//             </Fab>
//         </BackBtnHolder>
//         <Text>Header</Text>
//     </HeaderBar>
//     <HeaderImageHolder>
//         <AnimatedHeaderImage
//             style={[{ opacity: imageOpacity, transform: [{ translateY: imageTranslate }] }]}
//             source={require('assets/images/ford_poster.jpg')}
//         />
//     </HeaderImageHolder>
//     <HeaderBtnBox style={{ bottom: buttonsTranslate, width: buttonBoxWidth, right: buttonBoxRight }}>
//         <Fab small style={{ backgroundColor, elevation: fabShadow }}>
//             <Sasa fill={fillColor} />
//         </Fab>
//         <Fab small style={{ backgroundColor, borderRadius: 50, overflow: 'hidden', elevation: fabShadow }}>
//             <Sasa fill={fillColor} />
//         </Fab>
//     </HeaderBtnBox>
//         </AnimatedHeaderRoot >
