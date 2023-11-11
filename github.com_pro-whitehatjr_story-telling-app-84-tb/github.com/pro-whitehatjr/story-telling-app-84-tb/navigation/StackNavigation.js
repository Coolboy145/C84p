import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/PostScreen"

const Stack=createStackNavigator()

const Stacknavigator=()=>{
  return(
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={TabNavigator}/>
    <Stack.Screen name="Post Screen" component={PostScreen}/>
    </Stack.Navigator>
  )
}
export default Stacknavigator