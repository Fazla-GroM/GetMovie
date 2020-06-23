import styled from '@emotion/native'
import Animated from 'react-native-reanimated'
import { HEADER_MAX_HEIGHT } from 'consts'

const Root = styled.View(({ theme }) => ({
    flex: 1,
    position: 'relative'
}))

const ScrollContainer = styled.ScrollView(({ theme }) => ({
    flex: 1
}))

const ScrollViewContent = styled.View({
    marginTop: HEADER_MAX_HEIGHT + 20,
    paddingLeft: 16,
    paddingRight: 16
})

const Title = styled.Text(({ theme }) => ({
    ...theme.typography.bold,
    fontSize: 32,
    marginBottom: 8
}))

const Chip = styled.View(({ theme }) => ({
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 14,
    paddingLeft: 14,
    borderRadius: 50,
    borderWidth: 1.4,
    borderColor: theme.colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
}))

const ChipText = styled.Text(({ theme }) => ({
    ...theme.typography.medium,
    fontSize: 14
}))

const ChipList = styled.FlatList(({ theme }) => ({
    backgorundColor: '#333',
    marginBottom: 48
}))

const InfoBox = styled.View(({ theme }) => ({
    flexDirection: 'row',
    marginBottom: 20
}))

const InfoText = styled.Text(({ theme }) => ({
    ...theme.typography.regular,
    fontSize: 14,
    marginRight: 30
}))

const PlotBox = styled.View({
    marginBottom: 48
})

const PlotTitle = styled.Text(({ theme }) => ({
    ...theme.typography.medium,
    fontSize: 24,
    marginBottom: 16
}))

const PlotText = styled.Text(({ theme }) => ({
    ...theme.typography.regular,
    fontSize: 16,
    lineHeight: 29
}))

const CastBox = styled.View({
    marginBottom: 30
})

const CastTitle = styled.Text(({ theme }) => ({
    ...theme.typography.medium,
    fontSize: 24,
    marginBottom: 16
}))

const CastCardRoot = styled.View(({ theme }) => ({
    width: 80,
    alignItems: 'center',
    margin: 8
}))

const CardImageHolder = styled.View({
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    backgroundColor: '#888'
})

const CastNameText = styled.Text(({ theme }) => ({
    ...theme.typography.medium,
    fontSize: 16,
    textAlign: 'center'
}))

const CastRoleText = styled.Text(({ theme }) => ({
    ...theme.typography.medium,
    fontSize: 16,
    textAlign: 'center',
    color: theme.colors.greyDark
}))

export {
    Root,
    ScrollContainer,
    ScrollViewContent,
    Title,
    ChipList,
    Chip,
    ChipText,
    InfoBox,
    InfoText,
    PlotBox,
    PlotTitle,
    PlotText,
    CastBox,
    CastTitle,
    CastCardRoot,
    CardImageHolder,
    CastNameText,
    CastRoleText
}
