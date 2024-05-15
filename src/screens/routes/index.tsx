import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../Welcome';
import PriceList from '../PriceList';
import {AppPath} from '../../Constants';
import MainScreen from '../MainScreen';

const Stack = createNativeStackNavigator();

const routes = [
  {
    name: AppPath.Main,
    component: MainScreen,
    options: {headerShown: false},
  },
  {
    name: AppPath.Home,
    component: Welcome,
    options: {headerShown: false},
  },
  {
    name: AppPath.PriceList,
    component: PriceList,
    options: {headerShown: false},
  },
];

export const Routes = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={AppPath.Main}>
        {/* <Stack.Screen name="Home" component={Welcome} /> */}
        {routes.map((route, index) => (
          <Stack.Screen
            name={route.name}
            component={route.component}
            options={route.options}
            key={index}
          />
        ))}
      </Stack.Navigator>
    </>
  );
};
