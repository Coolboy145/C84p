import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigation from "./StackNavigation";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name="Home" component={StackNavigation} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;