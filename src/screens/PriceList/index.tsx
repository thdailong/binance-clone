import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {Box, HStack, ScrollView, Text} from 'native-base';
import {PriceListItem} from '../../Constants/Type';
import {Alert} from 'react-native';
import {PriceTagEnum} from '../../Constants/Enum';
import RowInfoCoin from './RowInfoCoin';

const Index = () => {
  const [list, setList] = useState([{} as PriceListItem]);

  const fetchData = async () => {
    try {
      setList([
        {
          name: 'Bitcoin',
          price: 20000,
          change: 100,
          changeType: PriceTagEnum.up,
        },
        {
          name: 'Ethereum',
          price: 2000,
          change: 100,
          changeType: PriceTagEnum.down,
        },
        {
          name: 'Litecoin',
          price: 200,
          change: 100,
          changeType: PriceTagEnum.up,
        },
      ]);
    } catch (error) {
      Alert.alert('Error', String(error));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header title="Price List" />
      <Box flex={1} bgColor={'black'} px={'20px'}>
        <HStack color={'white'}>
          <Text flex={1}>Name</Text>
          <Text pr={'20px'}>Recent Price</Text>
          <Text>Changed</Text>
        </HStack>
        <ScrollView flex={1}>
          {list.length > 0 &&
            list.map((item, index) => <RowInfoCoin info={item} key={index} />)}
        </ScrollView>
      </Box>
    </>
  );
};

export default Index;
