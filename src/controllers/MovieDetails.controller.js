import { cloneElement, useCallback, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getSingleMovie } from 'reducers'

const movieSelector = state => state.movies.movie

const MovieDetailsController = ({ children, route, ...rest }) => {
    const { params } = route
    const dispatch = useDispatch()
    const data = useSelector(movieSelector, shallowEqual)

    const getMovie = useCallback(() => dispatch(getSingleMovie(params.id)), [dispatch, params.id])

    useEffect(() => {
        getMovie()
    }, [params.id])

    return cloneElement(children, { ...rest, route, data })
}

export default MovieDetailsController
