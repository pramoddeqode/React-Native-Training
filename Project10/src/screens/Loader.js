import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Loader = () => {
  const [loader, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => setloader(false), 3000);
  }, []);
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={100} color="#00ff00" animating={loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loader;
