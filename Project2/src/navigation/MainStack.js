import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import CategoryList from '../screens/CategoryList';
import ProductList from '../screens/ProductList';


const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
      <Stack.Navigator initialRouteName="CategoryList">
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{ title: 'Details' }}
        />
        <Stack.Screen
          name="CategoryList"
          component={CategoryList}
          options={{ title: 'Categories' }}
        />
         <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ title: 'Products' }}
        />
       
      </Stack.Navigator>
  );
}; 

export default MainStack;