import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
 
import HomeScreen from '../screens/HomeScreen'
 
const StackNav = createStackNavigator();

export  const FeedStack = () => {
    return (
      <StackNav.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <StackNav.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerTitle: "HomeScreen" }}
        />
      </StackNav.Navigator>
    );
};



            {/* <Stack.Screen
                name="DoctorProfile"
                component={DoctorProfile}
                options={{ headerTitle: "DoctorProfile" }}
            />
            <Stack.Screen
                name="DoctorReview"
                component={DoctorReview}
                options={{ headerTitle: "DoctorReview" }}
            />
            <Stack.Screen
                name="BookingSlots"
                component={BookingSlots}
                options={{ headerTitle: "BookingSlots" }}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{ headerTitle: "Signup" }}
            />
            <Stack.Screen
                name="OtpVerify"
                component={OtpVerify}
                options={{ headerTitle: "OtpVerify" }}
            />
            <Stack.Screen
                name="PatientInfo"
                component={PatientInfo}
                options={{ headerTitle: "PatientInfo" }}
            />
            <Stack.Screen
                name="BookingConfirmation"
                component={BookingConfirmation}
                options={{ headerTitle: "BookingConfirmation" }}
            />
            <Stack.Screen
                name="MyAppointments"
                component={MyAppointments}
                options={{ headerTitle: "MyAppointments" }}
            />
            <Stack.Screen
                name="MyDoctor"
                component={MyDoctor}
                options={{ headerTitle: "MyDoctor" }}
            />
            <Stack.Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
                options={{ headerTitle: "AppointmentDetails" }}
            />
            <Stack.Screen
                name="Payments"
                component={Payments}
                options={{ headerTitle: "Payments" }}
            />
            <Stack.Screen
                name="Prescription"
                component={Prescription}
                options={{ headerTitle: "Prescription" }}
            />
            <Stack.Screen
                name="Prescription_Detail"
                component={Prescription_Detail}
                options={{ headerTitle: "Prescription Detail" }}
            />
            <Stack.Screen
                name="Help"
                component={Help}
                options={{ headerTitle: "Help" }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ headerTitle: "Settings" }}
            />
            <Stack.Screen
                name="Blogs"
                component={Blogs}
                options={{ headerTitle: "Blogs" }}
            />
            <Stack.Screen
                name="BlogDetails"
                component={BlogDetails}
                options={{ headerTitle: "BlogDetails" }}
            />
            <Stack.Screen
                name="RateApp"
                component={RateApp}
                options={{ headerTitle: "RateApp" }}
            />
            <Stack.Screen
                name="ReferDoctor"
                component={ReferDoctor}
                options={{ headerTitle: "ReferDoctor" }}
            />
            <Stack.Screen
                name="ReferForm"
                component={ReferForm}
                options={{ headerTitle: "ReferForm" }}
            />
            <Stack.Screen
                name="Chat"
                component={Chat}
                options={{ headerTitle: "Chat" }}
            />
            <Stack.Screen name="VideoCall" component={VideoCall} />
            <Stack.Screen name="JoinUs" component={JoinUs} />
            <Stack.Screen name="AppointInfo" component={AppointInfo} /> */}
        
