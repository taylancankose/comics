import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Search.style';

function Search({onChange, onSubmit, placeholder}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder={placeholder}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
}

export default Search;
