import { cloneElement } from 'react'

const MovieDetailsController = ({ children, ...rest }) => {
    return cloneElement(children, { ...rest, sasa: 2 })
}

export default MovieDetailsController
