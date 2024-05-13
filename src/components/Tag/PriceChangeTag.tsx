import {Box, Text} from 'native-base';
import React from 'react';
import {PriceTagEnum} from '../../Constants/Enum';

const PriceChangeTag = ({
  number,
  type,
}: {
  number: Number;
  type: PriceTagEnum;
}) => {
  const typeTag = {
    up: {
      color: '#00C48C',
      prefix: '+',
    },
    down: {
      color: '#FF6B6B',
      prefix: '-',
    },
  };

  return (
    <Box bgColor={typeTag[type].color} px={'10px'} py={'6px'}>
      <Text color={'white'}>
        {typeTag[type].prefix} {number.toString()}%
      </Text>
    </Box>
  );
};

export default PriceChangeTag;
