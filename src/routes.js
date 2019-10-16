import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'

// Provider
import Dashboard from './pages/provider/Dashboard'

// Customer
import Home from './pages/customer/Home'

// All
import Profile from './pages/Profile'

const tabBarOptions = {
    keyboardHidesTabBar: true,
    activeTintColor: '#fff',
    inactiveTintColor: 'rgba(128, 128,128, 0.8)',
    style: {
        borderTopColor: 'white',
        backgroundColor: '#313131',
    },
}

export default (isSigned = false, isProvider = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                    SignIn,
                    ForgotPassword,
                }),
                Provider: createBottomTabNavigator(
                    {
                        Dashboard,
                        Profile,
                    },
                    {
                        tabBarOptions,
                    }
                ),
                Customer: createBottomTabNavigator(
                    {
                        Home,
                        Profile,
                    },
                    {
                        tabBarOptions,
                    }
                ),
            },
            {
                initialRouteName: (() => {
                    if (isSigned) {
                        if (isProvider) {
                            return 'Provider'
                        }
                        return 'Customer'
                    }
                    return 'Sign'
                })(),
            }
        )
    )
