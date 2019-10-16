import { AsyncStorage } from 'react-native'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'

if (__DEV__) {
    const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
        .configure({
            name: 'App',
            host: '192.168.0.5',
            port: 9090,
        })
        .useReactNative()
        .use(reactotronRedux())
        .use(reactotronSaga())
        .connect()

    console.tron = tron

    tron.clear()
}
