import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from './screens/Splash';
import SignUp from "./screens/SignUp";
import MainStackDrawerNavigator from "./screens/MainStackDrawerNavigator";
import PostAppointments from "./screens/appointments/PostAppointments"

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MainStackDrawerNavigator"
        component={MainStackDrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PostAppointments"
        component={PostAppointments}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 });
