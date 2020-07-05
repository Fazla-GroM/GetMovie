import styled from '@emotion/native'

const Root = styled.View(({ spacing, theme }) => ({
    borderRadius: theme.borderRadius,
    borderColor: theme.colors.pink,
    borderWidth: 1,
    padding: theme.setSpacing(2),
    marginVertical: spacing ? theme.setSpacing(1) : null
    //  backgroundColor: 'rgba(29, 30, 39, 0.6)'
}))
const Input = styled.TextInput(({ theme }) => ({
    fontSize: 16,
    color: theme.colors.white
}))

const Label = styled.Text(({ theme }) => ({
    color: theme.colors.pink,
    position: 'absolute',
    left: 16,
    ,
    fontSize: 16,
    fontWeight: '500'
}))

export { Root, Input, Label }
