import React from 'react';
import {FlatList, Text, View} from 'react-native';
import ResultElementCard from '../Cards/ResultElementCard/ResultElementCard';

function SearchResults({heroData}) {
  const renderHeroes = ({item}) => <ResultElementCard item={item} />;
  return (
    <View style={{flex: 1}}>
      <FlatList data={heroData} renderItem={renderHeroes} numColumns={3} />
    </View>
  );
}

export default SearchResults;
