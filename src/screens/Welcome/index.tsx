import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Box, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const Index = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onGoTopPriceList = () => {
    navigation.navigate('PriceList');
  };

  return (
    <>
      <Box bgColor={'black'}>
        <Text color={'white'}>Hello, it works</Text>
        <TouchableOpacity onPress={onGoTopPriceList}>
          <Text color={'white'}>Click here to view price list</Text>
        </TouchableOpacity>
      </Box>
    </>
  );
};

export default Index;
