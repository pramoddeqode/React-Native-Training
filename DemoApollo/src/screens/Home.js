import {View, Text} from 'react-native';
import React from 'react';
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;


export default function Home() {
const { data, loading, error } = useQuery(FILMS_QUERY);
  if (loading) return
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
