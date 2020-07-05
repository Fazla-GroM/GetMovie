import styled from '@emotion/native'

const Root = styled.TouchableOpacity(({ startAdornment, endAdornment, theme }) => ({
    minHeight: 36,
    minWidth: 64,
    paddingVertical: theme.setSpacing(2),
    paddingLeft: startAdornment ? theme.setSpacing(1) : theme.setSpacing(2),
    paddingRight: endAdornment ? theme.setSpacing(1) : theme.setSpacing(2),
    backgroundColor: theme.colors.pink,
    borderRadius: theme.borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: endAdornment || startAdornment ? 'space-between' : 'center'
}))

const Text = styled.Text(({ theme }) => ({
    color: theme.colors.white,
    ...theme.fontWeight.medium,
    fontSize: 16
}))

export { Root, Text }
