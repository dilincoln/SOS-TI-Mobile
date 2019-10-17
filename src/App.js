import React from 'react'
import { useSelector } from 'react-redux'

import createRouter from './routes'

const App: () => React$Node = () => {
    const { signed, provider } = useSelector(state => state.auth)

    const Routes = createRouter(signed, provider)

    return <Routes />
}

export default App
