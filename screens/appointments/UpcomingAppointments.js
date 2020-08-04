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


export default class UpcomingAppointments extends React.Component{
  render(){
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }

}


 function FooterView() {
   return <View></View>;
 }




 function HeaderView() {
   return <View>
   
    </View>;
 }



 

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
    },
  });
    