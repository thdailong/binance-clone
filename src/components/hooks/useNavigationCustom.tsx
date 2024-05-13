import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const useNavigationCustom = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return navigation;
};

export default useNavigationCustom;
