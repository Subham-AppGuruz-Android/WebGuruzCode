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




    export default class AppointmentsDetails extends React.Component {
    render() {
        return (

            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.firstchild}>

                        <Image
                            source={require("../../assets/doctor.png")}
                            style={styles.iconstyle}
                        />

                        <View>

                            <View style={{ flexDirection: "row" }}>

                                <Text
                                    style={{
                                        marginTop: 9,
                                        fontSize: 14,
                                    }}
                                >
                                    {" "}
                              Appointment with {" "}
                                </Text>

                                <Text style={{
                                    fontWeight: "bold",
                                    marginTop: 10,
                                    marginLeft: -6,
                                    fontSize: 14,
                                }}
                                >
                                    {" "}
                               Dr. Christian Maxwell{" "}

                                </Text>

                            </View>


                            <View style={{ flexDirection: "row", flex: 2, marginTop: 18 }}>


                                <View style={{ flex: 1.6, flexDirection: 'column' }}>


                                    <Text style={{ fontSize: 13 }}> Maxwell Dental Clinic </Text>
                                    <Text style={{ fontSize: 11, color: '#0095F7', fontSize: 10 }}> 22 years as specialist </Text>

                                </View>


                                <View style={{ flex: 1, flexDirection: 'row' }}>

                                    <Image
                                        source={require("../../assets/right.png")}
                                        style={{ width: 22, height: 22 }}
                                    />

                                    <Text style={{ fontSize: 10, marginStart: 6 }}> wishhealth Verified</Text>




                                </View>



                            </View>

                        </View>


                    </View>

                    <BottomItemHere></BottomItemHere>

                </View>

            </ScrollView>

            
        );
    }
    }


    function BottomItemHere(){

         return(
             <View style={styles.commonview}>

                 <Card  style={styles.cardViewStyle} >

                     <Text style={{ fontWeight: 'bold', marginStart: 24, marginTop: 16 }}>Date and Time</Text>
                     <Text style={{ marginStart: 24, marginTop: 4, fontSize: 12 }}>Monday, 15th May 2020,12:00 P.M</Text>

                     </Card>


                 <Card style={styles.cardViewStyle} >

                     <Text style={{ fontWeight: 'bold', marginStart: 24,marginTop:12}}>Address</Text>
                     <Text style={{ marginStart: 24, marginTop: 4, fontSize: 12 }}>Maxwell Dental Clinic </Text>
                     <Text style={{ marginStart: 24, marginTop: 4, fontSize: 12}}>14, Pennselyvania, US, 10500  </Text>



                 </Card>


                 <Card style={styles.cardViewStyle} >

                     <Text style={{ fontWeight: 'bold', marginStart: 24, marginTop: 12 }}>Booking Details</Text>
                     <Text style={{ marginStart: 24, marginTop: 4, fontSize: 12 }}>Appointment Id : 10038632 </Text>
                     <Text style={{ marginStart: 24, marginTop: 4, fontSize: 12 }}>Appointment Type : OPD Conultation  </Text>



                 </Card>


                 <Card 
                  style={styles.cardViewStyle} >

                 <View style={{flex:1,flexDirection:'row'}}>

                         <Text style={{ fontWeight: 'bold', marginStart: 24, marginTop: 32 }}>Booked For :</Text>
                         <Text style={{ marginTop: 32, marginStart: 14, }}>John Ceaser</Text>


                     </View>




                 </Card>
             
                

                 <View style={[{ alignSelf: "flex-end",marginEnd:34,elevation:0, height: "4%", width: "20%", marginTop: 12 }]}>
                     <Button
                         onPress={() => this.props.navigation.navigate('AppointmentsDetails')}
                         title="Cancel"
                         color="#808385"

                     />
                 </View>


                 <View style={[{ alignSelf: 'center', paddingBottom:26, height:"60%", width: "60%", marginTop: 52 }]}>
                     <Button
                         onPress={() => this.props.navigation.navigate('AppointmentsDetails')}
                         title="MODIFY"
                         color="#0095F7"

                     />
                 </View>




             </View>
         )


    }


    const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex:1,
        flexDirection:"column",
        marginTop:16
    },
    firstchild:{
        flexDirection:"row",
        marginTop:54
    },
    iconstyle:{
        width: 64,
        height: 64,
        marginStart: 24,
        marginTop:12,
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
    },

    commonview:{
        flex:1,
        flexDirection:'column',
        marginTop: 26
    },
        cardViewStyle: {
            height: 80,
            marginTop:24,
            backgroundColor:'#f5f5f0',
            marginStart:12,
            marginEnd:12,
            justifyContent:'center'
            
        },

    });

