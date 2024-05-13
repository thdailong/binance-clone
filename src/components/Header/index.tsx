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
    <Box bgColor={'white'}>
      <HStack alignItems={'center'}>
        <TouchableOpacity onPress={onIconPress}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <Text color={'white'} flex={1}>
          {title}
        </Text>
        {children}
      </HStack>
    </Box>
  );
};

export default Header;
