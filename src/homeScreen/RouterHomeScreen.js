import React from 'react';
import {StyleSheet, Buttom, Text, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import listSurvey from './pages/listSurvey';
import messageUser from './pages/messageUser';
import akunUser from './pages/akunUser';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ButtomNavigation from './ButtomNavigation';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtomNavigation {...props} />}>
      <Tab.Screen name="Akun" component={akunUser} />
      <Tab.Screen name="Message" component={messageUser} />
      <Tab.Screen name="Survey" component={listSurvey} />
    </Tab.Navigator>
  );
};

const RouterHomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="MainTabs">
      <Stack.Screen
        name="listSurvey"
        component={listSurvey}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="messageUser"
        component={messageUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RouterHomeScreen;

const styles = StyleSheet.create({});
