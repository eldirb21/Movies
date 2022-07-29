import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import React from 'react';
import dataRoots from './data-root';

const Stack = createStackNavigator();

export default function AuthNavigation() {
	return (
		<Stack.Navigator
		screenOptions={{
			headerShown: false,
			gestureEnabled: true,
			gestureDirection: 'horizontal',
		}}
	>
		{Array.isArray(dataRoots) &&
			dataRoots
				.map((item, index) => {
					return (
						<Stack.Screen
							key={index}
							name={item.name}
							component={item.components}
							// options={item.options}
						/>
					);
				})}
	</Stack.Navigator>
	)
}