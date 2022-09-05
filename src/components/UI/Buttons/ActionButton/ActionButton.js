import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './ActionButton.style';

function ActionButton({title, actionPress}) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={actionPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default ActionButton;
