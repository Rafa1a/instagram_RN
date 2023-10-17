import React, {useState} from "react";
import { createBottomTabNavigator, } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import { Icon } from "@rneui/themed";
import Feed from "../screens/Feed";
import Addphoto from "../screens/Addphoto";
import Profile from "../screens/Profile";
import Login from '../screens/Login'
import Registro from '../screens/Resgistro'
import { Dispatch } from "redux";
import { logout } from "../store/action/users";
import { connect } from "react-redux";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FeedStack = (props:any) => {
  return (
    <Stack.Navigator initialRouteName="TabMenu" >

      <Stack.Screen name="TabMenu" component={MenuNavigator} {...props} options={{headerShown:false}}/>
      
      <Stack.Screen name="Registro" component={Registro} {...props}/>
    </Stack.Navigator> 
  );
};
const MenuNavigator = (props:any) => {
  const [loginsaida, setLoginsaida] = useState(false);

  const Profile_Login = (newValue: boolean) => {
    setLoginsaida(newValue);
  };

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
        name="Camera"
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
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" type="ionicon" size={35} color={color} />
          )
        }}
      >
        {() => loginsaida ? <Profile {...props} Profile_Login={Profile_Login} /> : <Login {...props} Profile_Login={Profile_Login}/>}
      </Tab.Screen>
      
    </Tab.Navigator>
    
  );
};
const mapStateProps = ({user}:{user:any}) => {
  return {
      email: user.email,
      name : user.name,
      loginsaida: user.loginsaida
  }
}
const mapDispatchProps = (dispatch:Dispatch) => {
  return {
    onLogin : () => dispatch(logout())
  }
}
export default FeedStack