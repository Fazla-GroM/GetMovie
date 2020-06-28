import React, { useCallback } from 'react'
import { FlatList } from 'react-native'
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

const CardSwiper = ({ Card, title, titleSub, ...rest }) => {
    const theme = useTheme()
    const navigation = useNavigation()

    const onPress = useCallback(() => navigation.navigate('Details'), [navigation])

    return (
        <Root>
            <Toolbar>
                <TitleBox>
                    <Text>{title}</Text>
                    <Text secondary>{titleSub}</Text>
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
    Card: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    titleSub: PropTypes.string.isRequired
}

export default CardSwiper
