/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Routes} from './src/screens/routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import Theme from './Theme';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider theme={Theme}>
      <NavigationContainer>
        <GestureHandlerRootView>
          <Routes />
        </GestureHandlerRootView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
