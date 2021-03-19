import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AngunanBPKB from './pages/AngunanBPKB';
import AngunanSHM from './pages/AngunanSHM';
import MenuSurvey from './pages/MenuSurvey';
// import menuSurvey from './pages/menuSurvey';

const Stack = createStackNavigator();

const RouterHomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="menuSurvey"
        component={MenuSurvey}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="angunanBPKB"
        component={AngunanBPKB}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="angunanSHM"
        component={AngunanSHM}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RouterHomeScreen;

const styles = StyleSheet.create({});
