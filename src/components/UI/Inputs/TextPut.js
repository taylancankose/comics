import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './TextPut.style';

function TextPut({onChange, placeholder, label, isPassword}) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder={placeholder}
        secureTextEntry={isPassword}
      />
    </View>
  );
}

export default TextPut;
