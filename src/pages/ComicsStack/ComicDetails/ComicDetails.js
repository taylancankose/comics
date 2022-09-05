import React from 'react';
import {TouchableOpacity, Image, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeroDetailCard from '../../../components/UI/Cards/HeroDetailCard/HeroDetailCard';
import {addFavorites, removeFavorite} from '../../../redux/comicsSlice';
import styles from './ComicDetails.style';

function ComicDetails() {
  const dispatch = useDispatch();
  const comic = useSelector(state => state.comics.comic);
  const comicHeroes = useSelector(state => state.comics.comicCharacters);
  const comicCreators = useSelector(state => state.comics.comicCreators);
  const favoriteComics = useSelector(state => state.comics.favoriteComics);

  const addFavorite = async () => {
    dispatch(addFavorites(comic[0]));
    // try {
    //   const jsonData = JSON.stringify(favoriteComics);
    //   await AsyncStorage.setItem('@favComics', jsonData);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const removeFavorites = () => {
    dispatch(removeFavorite(comic[0]));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{
            uri: `${comic[0]?.thumbnail.path}.${comic[0]?.thumbnail.extension}`,
          }}
        />
        <View style={styles.hero_container}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.hero_name}>{comic[0]?.title}</Text>
            {favoriteComics.find(e => e.title === comic[0]?.title) ? (
              <TouchableOpacity onPress={removeFavorites}>
                <Icon color="red" name="favorite" size={30} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={addFavorite}>
                <Icon color="red" name="favorite-border" size={30} />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.description}>{comic[0]?.description}</Text>
        </View>
        <View style={styles.comics_series_events}>
          {comicHeroes && (
            <View style={styles.comics}>
              <Text style={styles.title}>Characters in the Comic</Text>
              <HeroDetailCard detailData={comicHeroes} />
            </View>
          )}
          {comicCreators && (
            <View style={styles.series}>
              <Text style={styles.title}>Creators</Text>
              <HeroDetailCard detailData={comicCreators} />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default ComicDetails;
