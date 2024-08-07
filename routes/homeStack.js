import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Home GameZone"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;