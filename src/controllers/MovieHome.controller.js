import { cloneElement, useCallback, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { getPopularMovies, getNowPlayingMovies, getTopRatedMovies, getUpcomingMovies } from 'reducers'

const moviesSelector = state => ({
    popularMovies: state.movies.popularMovies.results,
    upcomingMovies: state.movies.upcomingMovies.results,
    topRatedMovies: state.movies.topRatedMovies.results,
    nowPlayingMovies: state.movies.nowPlayingMovies.results
})

const MovieHomeController = ({ children, ...rest }) => {
    const dispatch = useDispatch()
    const data = useSelector(moviesSelector)

    const getPopular = useCallback(() => dispatch(getPopularMovies())[dispatch])

    const getUpcoming = useCallback(() => dispatch(getUpcomingMovies())[dispatch])

    const getTopRated = useCallback(() => dispatch(getTopRatedMovies())[dispatch])

    const getNowPlaying = useCallback(() => dispatch(getNowPlayingMovies())[dispatch])

    useEffect(() => {
        batch(() => {
            getPopular(), getNowPlaying(), getTopRated(), getUpcoming()
        })
    }, [])

    return cloneElement(children, { ...rest, data })
}

export default MovieHomeController
