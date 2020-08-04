import React from "react";
import { View, StyleSheet,Image } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";



export function DrawerContent(props) {


  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
      
        <CustomNaviagtionDrawerView></CustomNaviagtionDrawerView>

      </DrawerContentScrollView>
      {/* <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section> */}
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



    // <View style={styles.userInfoSection}>

    //   <View style={{ flexDirection: "row", marginTop: 15 }}>
    //     <Avatar.Image
    //       source={{
    //         uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
    //       }}
    //       size={50}
    //     />
    //     <View style={{ marginLeft: 15, flexDirection: "column" }}>
    //       <Title style={styles.title}>John Doe</Title>
    //       <Caption style={styles.caption}>@j_doe</Caption>
    //     </View>
    //   </View>

    //   <View style={styles.row}>
    //     <View style={styles.section}>
    //       <Paragraph style={[styles.paragraph, styles.caption]}>
    //         80
    //             </Paragraph>
    //       <Caption style={styles.caption}>Following</Caption>
    //     </View>
    //     <View style={styles.section}>
    //       <Paragraph style={[styles.paragraph, styles.caption]}>
    //         100
    //             </Paragraph>
    //       <Caption style={styles.caption}>Followers</Caption>
    //     </View>
    //   </View>

    // </View>
  )
}


function CustomNaviagtionDrawerView(props){
  return(
       <View style={styles.drawerContent}>
      <NaviagtionHeader> </NaviagtionHeader>
      <Drawer.Section style={styles.drawerSection}>
         <DrawerItem
          icon={({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          )}
          label="Appointments"
          header
          onPress={() => {
            props.navigation.navigate("Appointments");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => ( 
            <Icon name="video" color={color} size={size} />
          )}
          label="Video"
          onPress={() => {
            props.navigation.navigate("Profile");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="book-medical" color={color} size={size} />
          )}
          label="Prescriptions"
          onPress={() => {
            props.navigation.navigate("BookmarkScreen");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="doctor" color={color} size={size} />
          )}
          label="My Doctor"
          onPress={() => {
            props.navigation.navigate("SettingsScreen");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="contactless-payment" color={color} size={size} />
          )}
          label="Payments"
          onPress={() => {
            props.navigation.navigate("SupportScreen");
          }}
        />



        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          )}
          label="Settings"
          onPress={() => {
            props.navigation.navigate("SupportScreen");
          }}
        />


        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="comment-question" color={color} size={size} />
          )}
          label="Help Center"
          onPress={() => {
            props.navigation.navigate("SupportScreen");
          }}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="visa" color={color} size={size} />
          )}
          label="Read About Health"
          onPress={() => {
            props.navigation.navigate("SupportScreen");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="visa" color={color} size={size} />
          )}
          label="Rate our App "
          onPress={() => {
            props.navigation.navigate("SupportScreen");
          }}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="visa" color={color} size={size} />
          )}
          label="Log Out"
          onPress={() => {
            props.navigation.navigate("SupportScreen");
          }}
        />


      </Drawer.Section>
    </View>
       )
}
      //  <Drawer.Section title="Preferences">
      //   <TouchableRipple
      //     onPress={() => {
      //       toggleTheme();
      //     }}
      //   >
      //     <View style={styles.preference}>
      //       <Text>Dark Theme</Text>
      //       <View pointerEvents="none">
      //         {/* <Switch value={paperTheme.dark} /> */}
      //       </View>
      //     </View>
      //   </TouchableRipple>
      // </Drawer.Section>
 

 

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
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
