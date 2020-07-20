import styled from '@emotion/native'

const Root = styled.View(({ focused, theme }) => ({
    paddingVertical: theme.setSpacing(2),
    paddingHorizontal: theme.setSpacing(1),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: focused ? theme.colors.pinkTransparent : 'transparent',
    borderRadius: theme.borderRadius
}))

const Label = styled.Text(({ focused, theme }) => ({
    fontSize: 16,
    color: focused ? theme.colors.textPrimary : theme.colors.textSecondary,
    ...theme.fontWeight.semiBold
}))

const IconHolder = styled.View(({ theme }) => ({
    marginRight: theme.setSpacing(4)
}))

export { Root, Label, IconHolder }
