import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../Welcome';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

export const Routes = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </>
  );
};
