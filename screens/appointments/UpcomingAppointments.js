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
      <ScrollView>
        <View >
          <HeaderView></HeaderView>
          <HeaderView></HeaderView>
          <HeaderView></HeaderView>
          <HeaderView></HeaderView>
          <HeaderView></HeaderView>
          <HeaderView></HeaderView>
          <HeaderView></HeaderView>
        </View>
      </ScrollView>
   
    );
  }

}


 function HeaderView() {
   return <View>
   
     <Card cardElevation={5}
       cardMaxElevation={5}
       cornerRadius={5}
       style={styles.cardViewStyle} >


       <View style={styles.topviewstyle}>
         <Image
           source={require("../../assets/doctor.png")}
           style={{
             width: 64,
             height: 64,
             alignSelf: 'center',
             justifyContent: 'center',
             alignSelf: 'center',
             marginTop:12
           }}
         />


         <View style={{flexDirection:"column",marginStart:12}}>

           <View style={{ flexDirection: "row" }}>

             <Text
               style={{
                 marginTop: 10,
                 fontSize: 13,
               }}
             >
               {" "}
                              Appointment with {" "}
             </Text>

             <Text
               style={{
                 fontWeight: "bold",
                 marginTop: 8,
                 marginLeft: -6,
                 fontSize: 15,
               }}
             >
               {" "}
                               Dr. Christian Maxwell{" "}
             </Text>

           </View>

           <Text
             style={{
               marginTop: 4,
               fontSize: 10,
             }}
           >
             {" "}
                              Maxwell Dental Clinic {" "}
           </Text>

   
           <Text
             style={{
               marginTop: 4,
               fontSize: 10,
             }}
           >
             {" "}
                             28th May 2020 , 12:00 P.M {" "}
           </Text>


           <View style={[{ alignSelf: "flex-end", height: "10%", width: "35%", margin: 6, backgroundColor: "#04CA0A" }]}>
             <Button
               onPress={() => this.props.navigation.navigate('AppointmentsDetails')}
               title="Modify"
               color="#04CA0A"
             
             />
           </View>

         </View>


        </View>




       </Card>


    </View>;
 }
 

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flexDirection:"row"
    },
    cardViewStyle: {
      height: 140,
      margin: 12

    },
   topviewstyle: {
     backgroundColor: "#fff",
    flexDirection: "row",
    marginTop: 16,
    marginStart: 12,
    marginRight: 12
  },
    buttonStyle: {
      color: 'red',
      marginTop: 20,
      padding: 20,
      backgroundColor: 'green'
    }

  });
    