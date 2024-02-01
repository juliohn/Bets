import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../modules/Home';
import { PendingBetsDetails } from '../modules/Home/Details';

const { Navigator, Screen } = createNativeStackNavigator();


export function StackRoutes(){

    return (
        <Navigator screenOptions={{ headerShown: false}} >
            <Screen 
                name="Home"
                component={Home}         
             />

            <Screen 
                name="PendingBetsDetails"
                component={PendingBetsDetails}      
             />
        </Navigator>
    )
}