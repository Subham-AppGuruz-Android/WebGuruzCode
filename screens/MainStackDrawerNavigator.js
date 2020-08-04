import * as React from "react";
import { Button, View, StyleSheet, Text, Image, ScrollView } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import FeedStack from "../screens/FeedStack"

const DrawernAV = createDrawerNavigator()

 function MainStackDrawerNavigator() {
    return (
      <DrawernAV.Navigator>
        <DrawernAV.Screen name="HomeScreen" component={FeedStack} />
      </DrawernAV.Navigator>
    );
}

export default MainStackDrawerNavigator;




