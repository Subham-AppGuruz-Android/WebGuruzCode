import * as React from "react";
import { Button, View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
 
export default class HomeScreen extends React.Component {

    render() {
        return (
            Tasksagain() 
        )
    }
}


function Tasksagain() {
    return (

        <ScrollView>

            <View style={styles.parentprop} >
                <View style={styles.MainContainer}>
                    <TextInput
                        placeholder="Dr. Cabinel Mershal"
                        underlineColorAndroid='transparent'
                        style={{ flex: 8, height: 50 }}

                    />

                    <Image
                        source={require("../assets/search.png")}
                        style={styles.ImageStyles}
                    />


                </View>

                <Text style={{
                    flexDirection: 'row', flexWrap: 'wrap', marginTop: 42, marginStart: 24, marginEnd: 12, alignSelf: "center", justifyContent: "center", alignItems: 'center'
                }}> Could'nt find your dcotor . Click on the link below and refer to joining wish health team </Text>


                <Text style={{
                    marginTop: 24, marginStart: 24, fontWeight: "bold", color: "green", textDecorationLine: "underline"
                }}> About Us </Text>

                <InflateViewForshow> </InflateViewForshow>

                <InflateViewForshow> </InflateViewForshow>

                <InflateViewForshow> </InflateViewForshow>

                <InflateViewForshow> </InflateViewForshow>

                <InflateViewForshow> </InflateViewForshow>

                <InflateViewForshow> </InflateViewForshow>


            </View>

        </ScrollView>


    );

}



function InflateViewForshow() {
    return (
        <View>

            <View >

                <Card cardElevation={5}
                    cardMaxElevation={5}
                    cornerRadius={5}
                    style={styles.cardViewStyle} >

                    <View style={{ flex: 2, flexDirection: "column" }}>

                        <View style={styles.cardviewitem}>


                            <Image
                                source={require("../assets/doctor.png")}
                                style={{ width: 74, height: 74, marginStart: 4 }}
                            />

                            <View style={{ flex: 2, flexDirection: "column", marginTop: 10, fontSize: 12 }}>
                                <Text style={{ fontSize: 12, fontWeight: "bold" }}>Dr. Chrisnopher Max</Text>
                                <Text style={{ fontSize: 10, paddingTop: 4 }}>Dental</Text>
                                <Text style={{ fontSize: 10, paddingTop: 4 }}>Lorem Ipsum Close</Text>

                            </View>

                            <View style={{ flex: 1, flexDirection: "column", marginTop: 5 }}>
                                <Text style={{ fontSize: 12, paddingTop: 8 }}>Verified</Text>
                                <Text style={{ fontSize: 12, marginTop: 12, marginStart: 12, paddingTop: 8 }}>90%</Text>

                            </View>

                            <View style={{ flex: 1, flexDirection: "column", marginTop: 5 }}>

                                <Image
                                    source={require("../assets/right.png")}
                                    style={{ width: 20, height: 20, marginStart: 8, marginTop: 6 }}
                                />

                                <Image
                                    source={require("../assets/like.png")}
                                    style={{ width: 20, height: 20, marginStart: 8, marginTop: 12 }}
                                />


                            </View>

                        </View>

                        <View
                            style={{
                                borderBottomColor: '#e8ecef', borderBottomWidth: 1, marginTop: 24
                            }}
                        />

                    </View>


                    <BottomTabImageForNeed></BottomTabImageForNeed>

                </Card>
            </View>


        </View>
    );
}


function BottomTabImageForNeed() {

    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        
        <View style={{ flexDirection: "column" }}>
          <Image
            source={require("../assets/calendar.png")}
            resizeMode="contain"
            alignSelf="center"
            style={{ width: 28, alignContent: "center", height: 28 }}
          />

          <Text>Prescripion</Text>

        </View>

        <Image
          resizeMode="contain"
          source={require("../assets/calendar.png")}
          alignSelf="center"
          style={{ flex: 1, width: 28, alignContent: "center", height: 28 }}
        />

        <Image
          resizeMode="contain"
          alignSelf="center"
          source={require("../assets/comment.png")}
          style={{ flex: 1, width: 28, alignContent: "center", height: 28 }}
        />

        <Image
          resizeMode="contain"
          alignSelf="center"
          source={require("../assets/phone.png")}
          style={{ flex: 1, width: 28, alignContent: "center", height: 28 }}
        />
      </View>
    );

}

const styles = StyleSheet.create({

    MainContainer: {
        // Setting up View inside content in Vertically center.
        marginTop: 14,
        flexDirection: "row",
        marginStart: 24,
        marginEnd: 24,
        height: 50,
        paddingStart: 12,
        borderWidth: 1,
        borderColor: '#9b9c9e',
        borderRadius: 4,
        backgroundColor: "#FFFFFF"

    },


    cardviewitem: {
        flex: 1,
        flexDirection: "row",
        marginTop: 16

    },


    cardViewStyle: {
        height: 180,
        margin: 24

    },

    ImageStyles: {
        alignSelf: "center",
        justifyContent: "center",
        height: 24,
        width: 24,
        marginEnd: 12
    },

    parentprop: {
        flex: 1,
        flexDirection: "column"
    }
})


