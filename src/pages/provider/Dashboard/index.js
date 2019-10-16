import React from 'react'
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Background from '~/components/Background'

// import { Container } from './styles';

export default function Dashboard() {
    return (
        <View>
            <Text>Dashboard - Provider</Text>
        </View>
    )
}

Dashboard.navigationOptions = {
    tabBarLabel: 'Dashboard',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="home-outline" size={25} color={tintColor} />
    ),
}
