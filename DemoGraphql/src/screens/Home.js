import {View, Text} from 'react-native';
import React from 'react';
import {request, gql} from 'graphql-request';
import {useQuery} from 'react-query';

const endpoint = 'https://api.spacex.land/graphql/';
const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

export default function Home() {
  const {data, isLoading, error} = useQuery('launches', () => {
    return request(endpoint, FILMS_QUERY);
  });

  if (isLoading) return;
  <Text>"Loading..."</Text>;
  if (error) return <Text>{error.message}</Text>;

  return (
    <View>
      <Text>SpaceX Launches</Text>
      <View>
        {data.launchesPast.map(launch => (
          <Text key={launch.id}>{launch.mission_name}</Text>
        ))}
      </View>
    </View>
  );
}
