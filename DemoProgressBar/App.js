import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

export default function App() {
  const counter = useRef(new Animated.Value(0)).current;
  const countInterval = useRef(null);
  const [count, setCount] = useState(0);
  // EFFECT HOOK TO SETUP AND CLEAN INTERvAL COUNTER
  useEffect(() => {
    // SETUP INTERVAL COUNTER TO REFERENCED HOOK
    countInterval.current = setInterval(
      () => setCount(prev => prev + 5),
      1000,
    );
    return () => {
      // CLEAR ON EXIT
      clearInterval(countInterval);
    };
  }, []);
  // EFFECT HOOK TO TRACK CHANGES IN PROGRESS
  useEffect(() => {
    // TRIGGER VIEW UPDATE
    load(count);
    if (count >= 100) {
      setCount(100);
      // CLEAR
      clearInterval(countInterval);
    }
  }, [count]);
  // FUNCTION TO ANIMATE VIEW
  const load = value => {
    // UPDATE ANIMATABLE VIEW
    Animated.timing(counter, {
      toValue: value,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const width = counter.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });
 
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Progress bar sample app</Text>

      <Text style={styles.text2}>Loading.....</Text>
      <View style={styles.progressBar}>
        <Animated.View
          style=
            {{backgroundColor: '#8BED4F',width:width }}
        />
      </View>
      <Text style={styles.text3}>{count}%</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    padding: 8,
  },
  text1: {
    fontSize: 34,
  },
  text2: {
    fontSize: 22,
    margin: 5,
  },
  text3: {
    fontSize: 18,
  },
  progressBar: {
    height: 20,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
  },
});
