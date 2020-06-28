import styled from '@emotion/native'

const Root = styled.View(({ theme }) => ({
    marginVertical: theme.setSpacing(2)
}))

const Toolbar = styled.View(({ theme }) => ({
    paddingHorizontal: theme.setSpacing(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: theme.setSpacing(1)
}))

const TitleBox = styled.View({})

const Text = styled.Text(({ secondary, theme }) => ({
    color: secondary ? theme.colors.textSecondary : theme.colors.textPrimary,
    ...(secondary ? theme.fontWeight.regular : theme.fontWeight.semiBold),
    fontSize: secondary ? 14 : 18
}))

const Row = styled.View(({ theme }) => ({
    marginHorizontal: theme.setSpacing(1)
}))

export { Root, Toolbar, TitleBox, Text, Row }
