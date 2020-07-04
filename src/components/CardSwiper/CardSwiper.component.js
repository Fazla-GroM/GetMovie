import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'emotion-theming'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Root, Row, Text, TitleBox, Toolbar } from './CardSwiper.style'

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
                keyExtractor={(item, index) => item.id.toString() + index}
                renderItem={({ item }) => (
                    <Row>
                        <Card {...item} onPress={() => navigation.navigate('Details', { id: item.id })} />
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
    titleSub: PropTypes.string.isRequired,
    onCardPress: PropTypes.func
}

CardSwiper.defaultProps = {
    onCardPress: undefined
}

export default CardSwiper
