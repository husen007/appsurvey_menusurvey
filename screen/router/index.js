import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ButtomNavigation} from '../component';
import Message from '../pages/message';
import ListSurvey from '../pages/listSurvey';
import Akun from '../pages/akun';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab.Navigation bagian menu bawah layar
// MainApp lempar ke Stack.Navigator agar muncul halaman pertama tampilan screen "List Survey"
const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtomNavigation {...props} />}>
      <Tab.Screen name="Akun" component={Akun} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="ListSurvey" component={ListSurvey} />
    </Tab.Navigator>
  );
};

// Navigator layar
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Akun"
        component={Akun}
        options={{headerShown: false}}
        // headerShown: false => menghilangkan header navigator
      />
      <Stack.Screen
        name="Message"
        component={Message}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
