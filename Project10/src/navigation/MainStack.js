import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTabs from './MyTabs';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="ProductList">
      
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
