import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Box, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {AppPath} from '../../Constants';

const Index = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onGoTopPriceList = () => {
    navigation.navigate(AppPath.PriceList);
  };

  return (
    <>
      <Box bgColor={'appColors.background'} flex={1}>
        {/* <Tab.Navigator>
          <Tab.Screen name={AppPath.Home} component={Welcome} />
        </Tab.Navigator> */}
        <Text>Hello, it works</Text>
        <TouchableOpacity onPress={onGoTopPriceList}>
          <Text>Click here to view price list</Text>
        </TouchableOpacity>
      </Box>
    </>
  );
};

export default Index;
