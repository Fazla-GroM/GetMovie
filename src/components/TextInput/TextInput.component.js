/* eslint-disable no-unused-expressions */
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Pressable } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'
import { Root, Input, Label } from './TextInput.style'

const TextInput = ({ spacing, label, name, value, setValue }) => {
    const inputRef = useRef()
    const labelPosition = useRef(new Animated.Value(16)).current
    const labelFontSize = useRef(new Animated.Value(16)).current

    const onFocus = () => {
        Animated.timing(labelPosition, {
            toValue: 8,
            duration: 250,
            easing: Easing.inOut(Easing.ease)
        }).start()
        Animated.timing(labelFontSize, {
            toValue: 12,
            duration: 250,
            easing: Easing.inOut(Easing.ease)
        }).start()
    }

    const onBlur = () => {
        if (!value) {
            Animated.timing(labelPosition, {
                toValue: 16,
                duration: 250,
                easing: Easing.inOut(Easing.ease)
            }).start()
            Animated.timing(labelFontSize, {
                toValue: 16,
                duration: 250,
                easing: Easing.inOut(Easing.ease)
            }).start()
        }
    }

    return (
        <Pressable onPress={() => inputRef.current.focus()}>
            <Root spacing={spacing}>
                <Input
                    ref={inputRef}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChangeText={text => setValue(text, name)}
                    value={value}
                    autoCapitalize="none"
                />
                <Label
                    style={{
                        fontSize: labelFontSize,
                        transform: [{ translateY: labelPosition }]
                    }}>
                    {label}
                </Label>
            </Root>
        </Pressable>
    )
}

TextInput.propTypes = {
    spacing: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func
}

TextInput.defaultProps = {
    spacing: false,
    label: undefined,
    name: undefined,
    value: undefined,
    setValue: undefined
}

export default TextInput
