  import * as React from "react";
  import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  } from "react-native";
  import { TextInput } from "react-native-gesture-handler";
  import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
  import { NavigationContainer } from "@react-navigation/native";
  import { Avatar, Card, Title, Paragraph } from "react-native-paper";
 

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
                          <HeaderView></HeaderView>
                        </View>
                      </ScrollView>
                    );}
                }




   function HeaderView(){
                  return(
   <View style={{backgroundColor:"#fffff"}}>
                        {/* container for top view */}

                      <Card cardElevation={5}
                        cardMaxElevation={5}
                        cornerRadius={5}
                        style={styles.cardViewStyle} >

                        <View style={styles.topviewstyle}>
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

                          <View style={styles.selfintro}>

                          <View style={{flexDirection:"row"}}> 

                              <Text
                                style={{
                                  marginTop: 9,
                                  fontSize: 14,
                                }}
                              >
                                {" "}
                              Appointment with {" "}
                              </Text>

                              <Text
                                style={{
                                   fontWeight:"bold",
                                  marginTop: 8,
                                  marginLeft:-6,
                                  fontSize: 16,
                                }}
                              >
                                {" "}
                               Dr. Christian Maxwell{" "}
                              </Text>
                          
                          </View>
                           
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

                        
                          </Card>



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
            borderBottomColor: '#e8ecef', borderBottomWidth: 1, marginTop: 24
          }}
        />


        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >

        <View style={{flexDirection:"column",flex:1}}>

            <Image
              resizeMode="contain"
              source={require("../../assets/calendar.png")}
              alignSelf="center"
              style={{
                width: 20,
                height: 20,
              }}
            />


            <Text style={{alignSelf:'center',fontSize:10,marginStart:12,marginTop:4}}>Prescription</Text>

        </View>

        
          <View style={{flex:1, flexDirection: "column" }}>
         

          <Image
            resizeMode="contain"
            alignSelf="center"
            source={require("../../assets/comment.png")}
            style={{
              width: 20,
              alignContent: "center",
              height: 20,
            }}
          />
            <Text style={{ alignSelf: 'center',fontSize: 10,  marginStart: 12, marginTop: 4 }}>Book Again</Text>

          </View>

          <View style={{flex:1, flexDirection: "column" }}>

          
          <Image
            resizeMode="contain"
            alignSelf="center"
            source={require("../../assets/phone.png")}
            style={{
              width: 20,
              alignContent: "center",
              height: 20,
            }}
          />
            <Text style={{ alignSelf: 'center',fontSize: 10, marginStart: 12, marginTop: 4 }}>Give Feedback</Text>

          </View>
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
    marginTop: 8,
    marginStart: 12,
    marginRight: 12,
  },
    cardViewStyle: {
      height: 200,
      margin: 12

    },
  selfintro: {
    flexDirection: "column",
    marginLeft:12
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
