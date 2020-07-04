import { useSelector, useDispatch, shallowEqual } from 'react-redux'

const selectUser = state => state.user

const useUser = () => {
    const user = useSelector(selectUser, shallowEqual)

    return user
}

export default useUser
