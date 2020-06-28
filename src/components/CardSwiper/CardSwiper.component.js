import React, { useCallback } from 'react'
import { FlatList, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Root, Toolbar, Row, TitleBox, Text } from './CardSwiper.style'

const Button = props => {
    return (
        <BorderlessButton {...props}>
            <Text secondary>View all</Text>
        </BorderlessButton>
    )
}

const CardSwiper = ({ Card, ...rest }) => {
    const theme = useTheme()
    const navigation = useNavigation()

    const onPress = useCallback(() => navigation.navigate('Details'), [navigation])

    return (
        <Root>
            <StatusBar barStyle="light-content" />
            <Toolbar>
                <TitleBox>
                    <Text>Neki Teks</Text>
                    <Text secondary>ja sam mali text</Text>
                </TitleBox>
                <Button onPress={() => alert('PRESS')} />
            </Toolbar>
            <FlatList
                {...rest}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Row>
                        <Card {...item} onPress={onPress} />
                    </Row>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginVertical: theme.setSpacing(1) }}
                contentContainerStyle={{ paddingHorizontal: theme.setSpacing(1) }}
            />
        </Root>
    )
}

CardSwiper.propTypes = {
    Card: PropTypes.elementType.isRequired
}

export default CardSwiper
