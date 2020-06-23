import styled from '@emotion/native'
import { HEADER_MIN_HEIGHT } from 'consts'

const Root = styled.View(({ theme }) => ({
    height: HEADER_MIN_HEIGHT,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
}))

export { Root }
