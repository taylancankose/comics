import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import SearchResults from '../../../components/UI/SearchResults/SearchResults';
import styles from './HeroFavorites.style';

function HeroFavorites() {
  const favoriteHeroes = useSelector(state => state.hero.favoriteHeroes);
  return (
    <View style={styles.container}>
      <Text>HeroFavorites</Text>
      <SearchResults heroData={favoriteHeroes} />
    </View>
  );
}

export default HeroFavorites;
