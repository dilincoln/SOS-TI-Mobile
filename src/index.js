import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import './config/ReactotronConfig'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
})

console.tron.log('Hello Tron')

export default function App() {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.welcome}>Seja bem vindo</Text>
                <Text style={styles.welcome}>React Native!</Text>
            </View>
        </>
    )
}
