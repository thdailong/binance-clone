import {PriceTagEnum} from './Enum';

export type PriceListItem = {
  name: String;
  price: Number;
  change: Number;
  changeType: PriceTagEnum;
};

export type RootStackParamList = {
  YourScreen: {id: number} | undefined;
};
