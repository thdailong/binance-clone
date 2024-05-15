import {useTheme} from 'native-base';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FutureScreen from './FuturesScreen';
import TradingScreen from './TradingScreen';
import MarketScreen from './MarketScreen';
import WalletScreen from './WalletScreen';
import OverViewScreen from './Overview';
import {AppPath} from '../../Constants';

const Tab = createBottomTabNavigator();

const Index = () => {
  const {colors} = useTheme();
  return (
    <>
      <Tab.Navigator
        initialRouteName={AppPath.Overview}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.appColors.background,
            height: 60,
            paddingBottom: 10,
          },
          tabBarActiveTintColor: 'white',
        }}>
        <Tab.Screen name={AppPath.Overview} component={OverViewScreen} />
        <Tab.Screen name={AppPath.Futures} component={FutureScreen} />
        <Tab.Screen name={AppPath.Market} component={MarketScreen} />
        <Tab.Screen name={AppPath.Trading} component={TradingScreen} />
        <Tab.Screen name={AppPath.Wallet} component={WalletScreen} />
      </Tab.Navigator>
    </>
  );
};

export default Index;
