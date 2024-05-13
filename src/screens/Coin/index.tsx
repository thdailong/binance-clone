import React from 'react';
import Header from '../../components/Header';
import {Text} from 'native-base';

const Index = ({route}: any) => {
  const id = route?.params?.id;
  return (
    <>
      <Header title="Coin" />
      <Text>{id}</Text>
    </>
  );
};

export default Index;
