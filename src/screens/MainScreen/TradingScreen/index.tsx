import React from 'react';
import Header from '../../../components/Header';
import {Box, Text} from 'native-base';

const Index = () => {
  return (
    <>
      <Header title="Trading Screen" />
      <Box flex={1} bgColor={'appColors.background'}>
        <Text>Content</Text>
      </Box>
    </>
  );
};

export default Index;
