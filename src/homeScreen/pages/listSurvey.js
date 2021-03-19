import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const listSurvey = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.text}>Daftar Survey</Text>
      </View>
    </View>
  );
};

export default listSurvey;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#7cb342',
    alignItems: 'center',
    paddingVertical: 8,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#7cb342',
    justifyContent: 'center',
  },
});
