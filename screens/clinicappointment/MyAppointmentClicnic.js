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


export default class MyAppointmentClicnic extends React.Component {
    render() {
        return ( 
            <View style={styles.container}>

             <View style={styles.tabstyle}>
               <Text style={{flex:1,marginStart:12,marginTop:12,fontWeight:'bold'}} > Post Appointments </Text>
                <Text style={{ flex: 1, marginStart: 12, marginTop: 12,fontWeight:'bold' }}> Upcoming Appointments </Text>
             </View>
              
                <View style={styles.mainstyle}>

                    <Image
                        source={require("../../assets/doctor.png")}
                        style={{
                            width: 74,
                            height: 74,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                        }}
                    />

              </View>

            </View>
                      
              )
      }


}




const styles = StyleSheet.create({
    container: {
       flex:1,
       flexDirection:'column'
    },
    tabstyle:{
        marginTop:42,
        flex: 1,
        flexDirection: 'row'
    },
    textstyle:{
        flex: 1,
        flexDirection: 'row'
    },
    mainstyle:{
        flexDirection:'row',
        marginTop:24
    }

     
});