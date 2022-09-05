import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  getComic,
  getComicCharacters,
  getComicCreators,
} from '../../../../redux/comicsSlice';
import {getHero} from '../../../../redux/heroSlice';
import styles from './ResultElementCard.style';

function ResultElementCard({item}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const heroHandler = () => {
    if (item.title) {
      dispatch(getComic(item.id));
      dispatch(getComicCharacters(item.id));
      dispatch(getComicCreators(item.id));
      navigation.navigate('ComicDetails');
    } else {
      dispatch(getHero(item.id));
      navigation.navigate('HeroDetails');
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={heroHandler}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri:
              `${item?.thumbnail?.path}.${item?.thumbnail?.extension}` || null,
          }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.hero_container}>
        <Text style={styles.hero}>{item.name || item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ResultElementCard;
