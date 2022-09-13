import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import ProductList from '../screens/ProductList';


const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
      <Stack.Navigator initialRouteName="ProductList">
        
         <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ title: 'Products' }}
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