import {Box, HStack, Text} from 'native-base';
import React from 'react';
import PriceChangeTag from '../../components/Tag/PriceChangeTag';
import {PriceListItem} from '../../Constants/Type';
import {TouchableOpacity} from 'react-native';
import useNavigationCustom from '../../components/hooks/useNavigationCustom';

const RowInfoCoin = ({info}: {info: PriceListItem}) => {
  const navigation = useNavigationCustom();

  const onPressCoin = () => {
    navigation.navigate('Coin', {id: 1});
  };

  return (
    <Box>
      <TouchableOpacity onPress={onPressCoin}>
        <HStack pb={'10px'} alignItems={'center'}>
          <Text flex={1}>{info?.name}</Text>
          <Text pr={'10px'}>{info?.price?.toString()}</Text>
          <PriceChangeTag number={info.change} type={info.changeType} />
        </HStack>
      </TouchableOpacity>
    </Box>
  );
};

export default RowInfoCoin;
