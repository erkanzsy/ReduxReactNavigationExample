import React from 'react';
import {Text, StyleSheet} from 'react-native';


const Counter = props => {
  const { val } = props;

  return (
      <Text style={styles.text}>{val}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: 'bold'
  }
})

export default Counter;
