import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  incrementAsync,
  selectCount,
} from '@/domain/Redux/counterSlice';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementAsync = () => {
    dispatch(incrementAsync(1));
  };

  return (
    <View style={styles.master}>
      <View style={styles.counterContainer}>
        <View style={styles.box}>
          <TouchableOpacity onPress={handleDecrement}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Text style={styles.counter}>{count}</Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={handleIncrement}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box}>
        <TouchableOpacity onPress={handleIncrementAsync}>
          <Text style={styles.asyncButtonText}>Async +</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    flex: 1,
    alignItems: 'center',
  },
  counterContainer: {
    marginTop: 100,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 80,
  },
  asyncButtonText: {
    fontSize: 20,
  },
  counter: {
    fontSize: 80,
  },
  box: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Counter;
