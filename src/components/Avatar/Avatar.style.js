import styled from '@emotion/native'

const Root = styled.View(({ small, theme }) => ({
    width: small ? 48 : 56,
    height: small ? 48 : 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.colors.greyDark,
    borderRadius: 30
}))

const Text = styled.Text(({ theme }) => ({
    fontSize: 22,
    color: theme.colors.textSecondary
}))

export { Root, Text }
