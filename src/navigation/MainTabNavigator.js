import React from 'react'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'; 
import HomeScreen from '../screens/HomeScreen'; 
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/AntDesign';  
import Icons from 'react-native-vector-icons/MaterialIcons';  

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    !focused ? 
      <Icon name="home" size={30} color="#000000" style={{ top: 8  }}/>:
      <Icon name="home" size={30} color="#0183FA" style={{ top: 8  }}/> 
  ), 
}; 

const PersonStack = createStackNavigator({
  Profile: Profile,
});

PersonStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => ( 
    !focused ? 
    <Icons name="person-outline" size={35} color="#000000" style={{ top: 8  }}/>:
    <Icons name="person-outline" size={35} color="#0183FA" style={{ top: 8  }}/> 
  ), 
};

export default createBottomTabNavigator({
  HomeStack, 
  PersonStack
});
