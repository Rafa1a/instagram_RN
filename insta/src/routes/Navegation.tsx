import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import Feed from "../screens/Feed";
import Addphoto from "../screens/Addphoto";
const Tab = createBottomTabNavigator();

const MenuNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarActiveBackgroundColor:'rgb(218, 218, 218)',
        tabBarInactiveBackgroundColor:'#333'
        
        
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={35} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="AddPhoto"
        component={Addphoto}
        options={{
          title: 'Add Picture',
          tabBarIcon: ({ color }) => (
            <Icon name="camera" size={35} color={color}  />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Feed}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" type="ionicon"
            size={35} color={color}  />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default MenuNavigator;
