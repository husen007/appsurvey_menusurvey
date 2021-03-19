import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RouterHomeScreen from './homeScreen/RouterHomeScreen';
import RouterHomeMenuSurvey from './homeMenuSurvey/RouterHomeMenuSurvey';
// import AngunanBPKB from './homeMenuSurvey/pages/AngunanBPKB';

const App = () => {
  return (
    <NavigationContainer>
      <RouterHomeScreen />
      {/* <RouterHomeMenuSurvey /> */}
      {/* <AngunanBPKB /> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
