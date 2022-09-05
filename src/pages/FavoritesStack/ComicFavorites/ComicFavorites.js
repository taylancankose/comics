import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import SearchResults from '../../../components/UI/SearchResults/SearchResults';
import styles from './ComicFavorites.style';

function ComicFavorites() {
  const [comicData, setData] = useState([]);
  const favoriteComics = useSelector(state => state.comics.favoriteComics);

  // const checkData = async () => {
  //   const jsonData = await AsyncStorage.getItem('@favComics');
  //   setData(JSON.parse(jsonData) || favoriteComics);
  // };

  // useEffect(async () => {
  //   checkData();
  // }, []);

  return (
    <View style={styles.container}>
      <Text>ComicFavorites</Text>
      <SearchResults heroData={favoriteComics} />
    </View>
  );
}

export default ComicFavorites;
