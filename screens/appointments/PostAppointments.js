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


  export default class PostAppointments extends React.Component {
                  render() {
                    return (
                      // root parent view container
                      <ScrollView>
                        <View>
                          <HeaderView></HeaderView>
                          <HeaderView></HeaderView>
                          <HeaderView></HeaderView>
                          <HeaderView></HeaderView>
                          <HeaderView></HeaderView>
                        </View>
                      </ScrollView>
                    );}
                }




   function HeaderView(){
                  return(
   <View style={{backgroundColor:"#fffff"}}>
                        {/* container for top view */}
                        <View style={styles.topviewstyle}>
                          <Image
                            source={require("../../assets/doctor.png")}
                            style={{
                              width: 74,
                              height: 74,
                              marginStart: 4,
                              justifyContent: "center",
                              alignContent: "center",
                              alignSelf: "center",
                            }}
                          />

                          <View style={styles.selfintro}>
                            <Text
                              style={{
                                fontWeight: "bold",
                                marginTop: 12,
                                fontSize: 16,
                              }}
                            >
                              {" "}
                              Appointment with Dr. Christian Maxwell{" "}
                            </Text>
                            <View style={styles.rowsfeed}>
                              <Image
                                source={require("../../assets/calendar.png")}
                                resizeMode="contain"
                                alignSelf="center"
                                style={styles.rowsImage}
                              />

                              <Text style={styles.introtext}>Maxwell Dental Clinic</Text>
                            </View>

                            <View style={styles.rowsfeed}>
                              <Image
                                source={require("../../assets/calendar.png")}
                                resizeMode="contain"
                                alignSelf="center"
                                style={styles.rowsImage}
                              />

                              <Text style={styles.introtext}>25th may 2020, 12:00 PM</Text>
                            </View>

                            <View style={styles.rowsfeed}>
                              <Image
                                source={require("../../assets/calendar.png")}
                                resizeMode="contain"
                                alignSelf="center"
                                style={styles.rowsImage}
                              />

                              <Text style={styles.introtext}>Call lasted 30 minutes</Text>
                            </View>
                          </View>
                        </View>

                        {/* container for bottom view */}
                        <View><FooterView> </FooterView></View>




                      </View>
                  )
                }


 function FooterView(){
    return (
      
      
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "#fff"
        }}>


        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            backgroundColor: "#fff",
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/calendar.png")}
            alignSelf="center"
            style={{
              flex: 1,
              width: 28,
              alignContent: "center",
              height: 28,
            }}
          />

          <Image
            resizeMode="contain"
            alignSelf="center"
            source={require("../../assets/comment.png")}
            style={{
              flex: 1,
              width: 28,
              alignContent: "center",
              height: 28,
            }}
          />

          <Image
            resizeMode="contain"
            alignSelf="center"
            source={require("../../assets/phone.png")}
            style={{
              flex: 1,
              width: 28,
              alignContent: "center",
              height: 28,
            }}
          />
        </View>
      
      
      
      </View>
    
    
    );
    }


  const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },

  topviewstyle: {
    backgroundColor: "#fff",
    flexDirection: "row",
    marginTop: 28,
    marginStart: 12,
    marginRight: 12,
  },

  selfintro: {
    flexDirection: "column",
  },
  rowsfeed: {
    flexDirection: "row",
    marginTop: 8,
  },
  rowsImage: {
    width: 18,
    height: 18,
  },


  introtext:{
    marginStart:12,
    fontSize:12
  }

  });
