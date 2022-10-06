import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from './src/screens/Home';


const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
    <Home/>
  </ApolloProvider>
  );
};

export default App;
