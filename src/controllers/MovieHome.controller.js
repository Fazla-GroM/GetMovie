import { cloneElement, useCallback, useEffect } from 'react'
import { useDispatch, useSelector, batch, shallowEqual } from 'react-redux'
import { getPopularMovies, getNowPlayingMovies, getTopRatedMovies, getUpcomingMovies } from 'reducers'

const moviesSelector = state => ({
    popularMovies: state.movies.popularMovies.results,
    upcomingMovies: state.movies.upcomingMovies.results,
    topRatedMovies: state.movies.topRatedMovies.results,
    nowPlayingMovies: state.movies.nowPlayingMovies.results
})

const MovieHomeController = ({ children, ...rest }) => {
    const dispatch = useDispatch()
    const data = useSelector(moviesSelector, shallowEqual)

    const getAllMovies = useCallback(() => {
        dispatch(getPopularMovies())
        dispatch(getUpcomingMovies())
        dispatch(getTopRatedMovies())
        dispatch(getNowPlayingMovies())
    }, [dispatch])

    useEffect(() => {
        batch(() => {
            getAllMovies()
        })
    }, [])

    return cloneElement(children, { ...rest, data })
}

export default MovieHomeController
