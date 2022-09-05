import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Search from '../../../components/UI/Search/Search';
import SearchResults from '../../../components/UI/SearchResults/SearchResults';
import {getFirstHeroes, getHeroes, searchHero} from '../../../redux/heroSlice';
import styles from './Heroes.style';

function Heroes() {
  const dispatch = useDispatch();

  const firstHeroes = useSelector(state => state.hero?.firstHeroes);
  const heroesList = useSelector(state => state.hero?.searchHeroResults);
  const searchHeroQuerry = useSelector(state => state.hero?.searchHeroQuerry);

  useEffect(() => {
    dispatch(getFirstHeroes());
  }, []);

  const onSubmit = () => dispatch(getHeroes(searchHeroQuerry));
  const onChange = text => {
    dispatch(searchHero(text));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Search
        onSubmit={onSubmit}
        onChange={onChange}
        placeholder="Search a hero..."
      />
      {heroesList.length === 0 ? (
        <SearchResults heroData={firstHeroes} />
      ) : (
        <SearchResults heroData={heroesList} />
      )}
    </SafeAreaView>
  );
}

export default Heroes;
