import styled from '@emotion/native'

const Root = styled.SafeAreaView(({ theme }) => ({
    flex: 1,
    backgroundColor: theme.colors.background
}))

const UserDisplay = styled.View(({ theme }) => ({
    paddingHorizontal: theme.setSpacing(2),
    flexDirection: 'row'
}))

const Gretting = styled.View(({ theme }) => ({
    flex: 1,
    paddingLeft: theme.setSpacing(2),
    justifyContent: 'center'
}))

const Name = styled.Text(({ theme }) => ({
    color: theme.colors.textPrimary,
    fontSize: 18,
    ...theme.fontWeight.bold
}))

const Email = styled.Text(({ theme }) => ({
    color: theme.colors.textSecondary,
    fontSize: 16
}))

const Divider = styled.View(({ theme }) => ({
    marginHorizontal: theme.setSpacing(1),
    height: 1,
    backgroundColor: theme.colors.divider,
    marginVertical: theme.setSpacing(2)
}))

const ButtonHolder = styled.View(({ theme }) => ({
    paddingHorizontal: theme.setSpacing(1)
}))

export { Root, UserDisplay, Gretting, Name, Email, Divider, ButtonHolder }
