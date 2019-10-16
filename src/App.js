import React from 'react'
import { useSelector } from 'react-redux'

import createRouter from './routes'

export default function App() {
    const { signed, provider } = useSelector(state => state.auth)

    const Routes = createRouter(signed, provider)

    return <Routes />
}
