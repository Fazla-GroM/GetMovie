import {
    API_KEY,
    API_URL,
    SINGLE_MOVIE,
    POPULAR_MOVIES,
    NOW_PLAYING_MOVIES,
    TOP_RATED_MOVIES,
    UPCOMING_MOVIES
} from 'react-native-dotenv'

const SET_SINGLE = 'GETMOVIE/MOVIES/SET_SINGLE'
const SET_POPULAR = 'GETMOVIE/MOVIES/SET_POPULAR'
const SET_NOW_PLAYING = 'GETMOVIE/MOVIES/SET_NOW_PLAYING'
const SET_TOP_RATED = 'GETMOVIE/MOVIES/SET_TOP_RATED'
const SET_UPCOMING = 'GETMOVIE/MOVIES/SET_UPCOMING'

const INITIAL_STATE = {
    movie: {},

    popularMovies: {
        hasMore: false,
        totalPages: 0,
        page: 0,
        results: []
    },
    topRatedMovies: {
        hasMore: false,
        totalPages: 0,
        page: 0,
        results: []
    },
    upcomingMovies: {
        hasMore: false,
        totalPages: 0,
        page: 0,
        results: []
    },
    nowPlayingMovies: {
        hasMore: false,
        totalPages: 0,
        page: 0,
        results: []
    }
}

export const getPopularMovies = page => async dispatch => {
    try {
        const res = await fetch(`${API_URL}${POPULAR_MOVIES}?api_key=${API_KEY}&language=en-US&page=${page}`)
        const data = await res.json()
        dispatch({
            type: SET_POPULAR,
            payload: {
                totalPages: data.total_pages,
                results: data.results
            }
        })
    } catch (err) {
        // TODO: handle Errors
        throw new Error('Whoops', err)
    }
}

export const getTopRatedMovies = page => async dispatch => {
    try {
        const res = await fetch(`${API_URL}${TOP_RATED_MOVIES}?api_key=${API_KEY}&language=en-US&page=${page}`)
        const data = await res.json()
        dispatch({
            type: SET_TOP_RATED,
            payload: {
                totalPages: data.total_pages,
                results: data.results
            }
        })
    } catch (err) {
        // TODO: handle Errors
        throw new Error('Whoops', err)
    }
}

export const getUpcomingMovies = page => async dispatch => {
    try {
        const res = await fetch(`${API_URL}${UPCOMING_MOVIES}?api_key=${API_KEY}&language=en-US&page=${page}`)
        const data = await res.json()
        dispatch({
            type: SET_UPCOMING,
            payload: {
                totalPages: data.total_pages,
                results: data.results
            }
        })
    } catch (err) {
        // TODO: handle Errors
        throw new Error('Whoops', err)
    }
}

export const getNowPlayingMovies = page => async dispatch => {
    try {
        const res = await fetch(`${API_URL}${NOW_PLAYING_MOVIES}?api_key=${API_KEY}&language=en-US&page=${page}`)
        const data = await res.json()
        dispatch({
            type: SET_NOW_PLAYING,
            payload: {
                totalPages: data.total_pages,
                results: data.results
            }
        })
    } catch (err) {
        // TODO: handle Errors
        throw new Error('Whoops', err)
    }
}

const movieReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_POPULAR:
            return {
                ...state,
                popularMovies: {
                    hasMore: state.popularMovies.page < state.popularMovies.totalPages,
                    page: state.popularMovies.page + 1,
                    totalPages: payload.totalPages,
                    results: [...state.popularMovies.results, ...payload.results]
                }
            }
        case SET_NOW_PLAYING:
            return {
                ...state,
                nowPlayingMovies: {
                    hasMore: state.nowPlayingMovies.page < state.nowPlayingMovies.totalPages,
                    page: state.nowPlayingMovies.page + 1,
                    totalPages: payload.totalPages,
                    results: [...state.nowPlayingMovies.results, ...payload.results]
                }
            }
        case SET_TOP_RATED:
            return {
                ...state,
                topRatedMovies: {
                    hasMore: state.topRatedMovies.page < state.topRatedMovies.totalPages,
                    page: state.topRatedMovies.page + 1,
                    totalPages: payload.totalPages,
                    results: [...state.topRatedMovies.results, ...payload.results]
                }
            }
        case SET_UPCOMING:
            return {
                ...state,
                upcomingMovies: {
                    hasMore: state.upcomingMovies.page < state.upcomingMovies.totalPages,
                    page: state.upcomingMovies.page + 1,
                    totalPages: payload.totalPages,
                    results: [...state.upcomingMovies.results, ...payload.results]
                }
            }
        default:
            return state
    }
}

export default movieReducer
