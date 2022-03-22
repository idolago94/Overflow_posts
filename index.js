/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// RNDebugger only
if (window.FETCH_SUPPORT) {
    window.FETCH_SUPPORT.blob = false;
} else {
    global.FileReader = global.originalFileReader || global.FileReader;
    global.Blob = null
}

AppRegistry.registerComponent(appName, () => App);
