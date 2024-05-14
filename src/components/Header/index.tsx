import {useNavigation} from '@react-navigation/native';
import {ArrowBackIcon, Box, HStack, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const Header = ({title, children}: {title: string; children?: any}) => {
  const navigation = useNavigation();

  const onIconPress = () => {
    navigation.goBack();
  };

  return (
    <Box bgColor={'appColors.background'} px={'20px'} py={'16px'}>
      <HStack alignItems={'center'}>
        <TouchableOpacity onPress={onIconPress}>
          <ArrowBackIcon size={'24px'} />
        </TouchableOpacity>
        <Text
          color={'white'}
          flex={1}
          ml={'10px'}
          fontSize={16}
          fontWeight={600}>
          {title}
        </Text>
        {children}
      </HStack>
    </Box>
  );
};

export default Header;
