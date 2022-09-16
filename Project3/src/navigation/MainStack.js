import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import Category from '../screens/Category';


const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
      <Stack.Navigator initialRouteName="ProductList">
        
         <Stack.Screen
          name="Category"
          component={Category}
          options={{ title: 'Category' }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{ title: 'Details' }}
        />
        
      </Stack.Navigator>
  );
}; 

export default MainStack;