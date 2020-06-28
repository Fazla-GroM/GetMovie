import { cloneElement } from 'react'

const MovieHomeController = ({ children, ...rest }) => {
    return cloneElement(children, { ...rest, sasa: 2 })
}

export default MovieHomeController
