import axios from 'axios';
import React from 'react';
import {View,Text} from 'react-native';
import {useQuery} from 'react-query';

const fetchPost = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    return response.data;
  } catch (error) {
    throw Error('unable to fetch data');
  }
};

const Home = () => {
  const {data, isLoading, error} = useQuery('posts', fetchPost);
  console.log(data);
  return (
    <View>
     {isLoading?(
        <Text>Loading...</Text>
     ):data?(
        data.map((post,key)=>{
            return(
                <View>
                    <Text>{post.name}</Text>
                </View>
            )
        })
     ):(
        <Text>opps...</Text>
     )

     }
    </View>
  );
};

export default Home;
