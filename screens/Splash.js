import * as React from "react";
import { View, Image } from "react-native";


export default class Splash extends React.Component{
    constructor(props){
        super(props);
        setTimeout(()=>{
            this.props.navigation.navigate("SignUp");
        },2000);
    }
   
    render(){
        return(
            <View style={{ flex:1,backgroundColor:"#23B2FE"}}>

                <Image
                    source={require("../assets/colorLogo.png")}
                    style={{width: 74, height: 74, alignSelf:"center",justifyContent:"center",alignContent:'center',
                    marginStart: 4 , tintColor:"#FFFFFF" }}
                    alignContent="center"
                    justifyContent= "center"
                    alignItems= "center"
                    />

            </View>
        )
    }
}