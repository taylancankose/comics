import React, {useEffect} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import HeroDetailCard from '../../../components/UI/Cards/HeroDetailCard/HeroDetailCard';
import {
  addFavorites,
  getHeroComics,
  getHeroSeries,
} from '../../../redux/heroSlice';
import styles from './HeroDetails.style';

function HeroDetails() {
  const hero = useSelector(state => state.hero.hero);
  const heroComics = useSelector(state => state.hero.heroComics);
  const heroSeries = useSelector(state => state.hero.heroSeries);
  const favoriteHeroes = useSelector(state => state.hero.favoriteHeroes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHeroComics(hero[0]?.id));
    dispatch(getHeroSeries(hero[0]?.id));
  }, []);
  const addFavorite = () => {
    dispatch(addFavorites(hero[0]));
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {hero[0] === undefined ? (
          <Text></Text>
        ) : (
          <>
            <Image
              style={styles.image}
              source={{
                uri: `${hero[0]?.thumbnail?.path}.${hero[0]?.thumbnail?.extension}`
                  ? `${hero[0]?.thumbnail?.path}.${hero[0]?.thumbnail?.extension}`
                  : null,
              }}
            />
            <View style={styles.hero_container}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.hero_name}>{hero[0]?.name}</Text>
                {favoriteHeroes.find(e => e.name === hero[0]?.name) ? (
                  <TouchableOpacity>
                    <Icon color="red" name="favorite" size={30} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={addFavorite}>
                    <Icon color="red" name="favorite-border" size={30} />
                  </TouchableOpacity>
                )}
              </View>
              <Text style={styles.description}>{hero[0]?.description}</Text>
            </View>
            <View style={styles.comics_series_events}>
              {heroComics && (
                <View style={styles.comics}>
                  <Text style={styles.title}>Comics He Is In</Text>
                  <HeroDetailCard detailData={heroComics} />
                </View>
              )}
              {heroSeries && (
                <View style={styles.series}>
                  <Text style={styles.title}>Stories He Is In</Text>
                  <HeroDetailCard detailData={heroSeries} />
                </View>
              )}
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}

export default HeroDetails;
