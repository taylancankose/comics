import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Search from '../../../components/UI/Search/Search';
import SearchResults from '../../../components/UI/SearchResults/SearchResults';
import {
  getComics,
  getFirstComics,
  searchComics,
} from '../../../redux/comicsSlice';
import styles from './Comics.style';

function Comics() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFirstComics());
  }, []);
  const firstComics = useSelector(state => state.comics.firstComics);
  const comicList = useSelector(state => state.comics.searchComicsResults);
  const searchComicQuerry = useSelector(
    state => state.comics.searchComicQuerry,
  );

  const onSubmit = () => {
    dispatch(getComics(searchComicQuerry));
  };
  const onChange = text => {
    dispatch(searchComics(text));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Search
        placeholder="Search comics"
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {comicList.length < 1 ? (
        <SearchResults heroData={firstComics} />
      ) : (
        <SearchResults heroData={comicList} />
      )}
    </SafeAreaView>
  );
}

export default Comics;
