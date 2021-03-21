/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/App';
// import App from './App_Testing';
import App from './screen/App';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
