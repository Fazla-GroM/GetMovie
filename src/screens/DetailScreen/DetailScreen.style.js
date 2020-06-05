import styled from '@emotion/native'

const Root = styled.View(({ theme }) => ({
    flex: 1,
    backgroundColor: theme.colors.white
}))

const ImageContainer = styled.View({
    flex: 1.4,
    position: 'relative'
})

const Poster = styled.View({
    flex: 1,
    borderBottomLeftRadius: 50,
    overflow: 'hidden'
})

const PosterImage = styled.Image({
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined
})

const RatingsTab = styled.View(({ theme }) => ({
    paddingTop: 20,
    paddingRight: 32,
    paddingBottom: 20,
    paddingLeft: 60,
    backgroundColor: theme.colors.white,
    position: 'absolute',
    right: 0,
    bottom: -45,
    // left: 122,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    ...theme.boxShadow.one
}))

const Tab = styled.View({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'


})

const TabTextPrimary = styled.Text(({ theme }) => ({
    ...theme.typography.medium,
    fontSize: 16,
    lineHeight: 19,
    paddingTop: 5
}))

const TabTextSecodary = styled.Text(({ theme }) => ({
    ...theme.typography.regular,
    fontSize: 12,
    lineHeight: 15
}))

const RatingBox = styled.View(({ theme }) => ({
    backgroundColor: theme.colors.green,
    paddingLeft: 5,
    paddingRight: 5,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2
}))

const RatingBoxText = styled.Text(({ theme }) => ({
    ...theme.typography.medium,
    color: theme.colors.white,
    lineHeight: 17,
    fontSize: 14,
    textAlign: 'center',

}))

const Content = styled.View({
    flex: 2
})

export {
    Root,
    ImageContainer,
    Poster,
    PosterImage,
    RatingsTab,
    Tab,
    TabTextPrimary,
    TabTextSecodary,
    RatingBox,
    RatingBoxText,
    Content
}
