  import React from "react";
  import { View, StyleSheet,Image } from "react-native";
  import {
  Drawer,
  Text,
  } from "react-native-paper";
  import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
  import Icon from "react-native-vector-icons/MaterialCommunityIcons";
  import { color } from "react-native-reanimated";



  export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
      <CustomNaviagtionDrawerView></CustomNaviagtionDrawerView>
      </DrawerContentScrollView>
    </View>
  );
  }

  function NaviagtionHeader(){

  return(
  <View style={{ height: 94,flexDirection:"row", backgroundColor:"#23B2FE"}}>

        <Image
        resizeMode="contain"
        color="#FFFFFF"
        source={require("../assets/doctor.png")}
        style={{tintColor:"#ffffff",width: 54, height: 54,marginStart:22,justifyContent:"center",alignSelf:"center" }}
      />

      <Text style={{alignSelf:"center",color:"#ffffff",marginStart:14}}>Sign in</Text>

      <Image
        resizeMode="contain"
        color="#FFFFFF"
        source={require("../assets/edit.png")}
        style={{ flexDirection:"row",alignItems:"flex-end",alignContent:"flex-end",alignSelf:"center",marginStart:102,tintColor: "#ffffff", width: 24, height: 24}}
      />
      
    </View>
  )
  }


  function CustomNaviagtionDrawerView(props){
  return (
    <View style={styles.drawerContent}>
      <NaviagtionHeader> </NaviagtionHeader>
      <Drawer.Section style={styles.drawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="calendar" color={"#23B2FE"} size={size} />
          )}
          label="Appointments"
          color="#000000"
          onPress={() => {
            props.navigation.navigate("Appointments");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="video" color={"#23B2FE"} size={size} />
          )}
          label="Video"    
            onPress={() => {
            props.navigation.navigate("Profile");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="book-medical" color={"#23B2FE"} size={size} />
          )}
          label="Prescriptions"
          onPress={() => {
            props.navigation.navigate("BookmarkScreen");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="doctor" color={"#23B2FE"} size={size} />
          )}
          label="My Doctor"
          onPress={() => {
            props.navigation.navigate("SettingsScreen");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="contactless-payment" color={"#23B2FE"} size={size} />
          )}
          label="Payments"
          onPress={() => {
            props.navigation.navigate("SupportScreen");
          }}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="settings" color={"#23B2FE"} size={size} />
          )}
          label="Settings"
          onPress={() => {
            props.navigation.navigate("SupportScreen");
          }}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="comment-question" color={"#23B2FE"} size={size} />
          )}
          label="Help Center"
          onPress={() => {
            props.navigation.navigate("SupportScreen");
          }}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="visa" color={"#23B2FE"} size={size} />
          )}
          label="Read About Health"
          onPress={() => {
            props.navigation.navigate("SupportScreen");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="visa" color={"#23B2FE"} size={size} />
          )}
          label="Rate our App "
          onPress={() => {
            props.navigation.navigate("SupportScreen");
          }}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="visa" color={"#23B2FE"} size={size} />
          )}
          label="Log Out"
          onPress={() => {
            props.navigation.navigate("SupportScreen");
          }}
        />
      </Drawer.Section>
    </View>
  );
  }


  const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: "#f8f8f8"
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    backgroundColor: "#f8f8f8",
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  });
