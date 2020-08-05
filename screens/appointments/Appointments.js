import * as React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import PostAppointments from "../appointments/PostAppointments"
import UpcomingAppointments from "../appointments/UpcomingAppointments";


const TabND = createMaterialTopTabNavigator();

export default class Appointments extends React.Component{
     render(){
         return (
            <SetTabNav></SetTabNav>
         );
         }
}



function SetTabNav(){
  return (
    <TabND.Navigator>
      <TabND.Screen name="Post Appointments" component={PostAppointments}  />
      <TabND.Screen name="Upcoming Appointments" component={UpcomingAppointments} />
    </TabND.Navigator>
  );
}