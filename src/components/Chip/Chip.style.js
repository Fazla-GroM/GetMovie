import styled from '@emotion/native'

const Root = styled.View(({ theme }) => ({
    padding: theme.setSpacing(1),
    borderRadius: theme.borderRadius,
    borderColor: theme.colors.pink,
    borderWidth: 1,
    marginHorizontal: theme.setSpacing(1)
}))

const Text = styled.Text(({ theme }) => ({
    fontSize: 14,
    color: theme.colors.textSecondary
}))

export { Root, Text }
