import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import Home from './src/screens/Home';


const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
        <Home/>
    </QueryClientProvider>
  );
};

export default App;
