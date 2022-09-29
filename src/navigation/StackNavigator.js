import { createStackNavigator } from '@react-navigation/stack';
import {CardStyleInterpolators} from '@react-navigation/stack';
import Launch from '../pages/Launch';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
     screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        keyboardHidesTabBar: true,
      }}>


   <Stack.Screen name="lunch" component={Launch} />
    </Stack.Navigator>
  );
}