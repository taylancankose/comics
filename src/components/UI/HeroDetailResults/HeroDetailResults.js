import React from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';

function HeroDetailResults({item}) {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`,
        }}
      />
      {item.title ? (
        <Text style={styles.name}>{item?.title?.substring(0, 50)}</Text>
      ) : item.name ? (
        <Text style={styles.name}>{item.name}</Text>
      ) : (
        <Text style={styles.name}>{item.fullName}</Text>
      )}
    </ScrollView>
  );
}

export default HeroDetailResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  name: {
    fontFamily: 'Antonio-Light',
    color: 'black',
    maxWidth: 100,
  },
  image: {
    height: 120,
    width: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
});
