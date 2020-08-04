import * as React from "react";
import { View, StyleSheet, Text, Image,useState, ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Item,
  Form,
  Input,
  Label
} from "native-base";

import PhoneInput from "react-native-phone-input";
import MainStackDrawerNavigator from "../screens/MainStackDrawerNavigator"


class SignUp extends React.Component{

   render(){

        return (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              backgroundColor: "white",
            }}
          >
            <Image
              source={require("../assets/colorLogo.png")}
              style={styles.logoimage}
            />
            <Container
              style={{
                flex: 1,
                flexDirection: "column",
                marginTop: 12,
                marginStart: 24,
                marginEnd: 24,
              }}
            >
              <Content>
                <Item floatingLabel>
                  <Label>Name*</Label>
                  <Input />
                </Item>
                <Item floatingLabel style={{ marginTop: 16 }}>
                  <Label>Email</Label>
                  <Input />
                </Item>
              </Content>
            </Container>

            <CountrycodePicker> </CountrycodePicker>

            <Text
              style={{
                marginTop: 18,
                alignSelf: "center",
                justifyContent: "center",
                fontSize: 12,
              }}
            >
              You'll receive an sms to verify your identity , but we'll never
              spam
            </Text>
            <View
              style={{ flex: 1, justifyContent: "flex-end", marginBottom: 34 }}
            >
              <Button
                primary
                onPress={() =>
                  this.props.navigation.navigate("PostAppointments")
                }
                style={{
                  justifyContent: "center",
                  alignSelf: "stretch",
                  margin: 24,
                  height: 52,
                  backgroundColor: "#23B2FE",
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {" "}
                  CONTINUE{" "}
                </Text>
              </Button>
            </View>
          </View>
        );
     }}

function CountrycodePicker(){
    return (
      <View style={styles.container}>
        <PhoneInput
        />
      </View>
    );
}



const styles = StyleSheet.create({
  logoimage: {
    marginTop: 124,
    alignSelf: "center",
    justifyContent: "center",
    height: 146,
    width: 146,
  },
  container: {
    alignItems: "center",
    marginStart:24,
  },
});


export default SignUp;