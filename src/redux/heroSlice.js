import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import md5 from 'md5';
import Config from 'react-native-config';

export const getHeroes = createAsyncThunk('search', async searchHeroQuerry => {
  let ts = 1;
  const hash = md5(`${ts}${Config.API_SECRET}${Config.API_KEY}`);
  try {
    const res = await axios.get(
      `${Config.API_BASE_URL}/v1/public/characters?ts=${ts}&apikey=${Config.API_KEY}&hash=${hash}&nameStartsWith=${searchHeroQuerry}`,
    );
    return res.data.data.results;
  } catch (error) {
    console.log(error.message);
  }
});

export const getFirstHeroes = createAsyncThunk('heroes', async () => {
  let ts = 1;
  const hash = md5(`${ts}${Config.API_SECRET}${Config.API_KEY}`);
  try {
    const res = await axios.get(
      `${Config.API_BASE_URL}/v1/public/characters?ts=${ts}&apikey=${Config.API_KEY}&hash=${hash}`,
    );
    return res.data.data.results;
  } catch (error) {
    console.log(error.message);
  }
});

export const getHero = createAsyncThunk('hero', async id => {
  let ts = 1;
  const hash = md5(`${ts}${Config.API_SECRET}${Config.API_KEY}`);
  try {
    const res = await axios.get(
      `${Config.API_BASE_URL}/v1/public/characters/${id}?ts=${ts}&apikey=${Config.API_KEY}&hash=${hash}`,
    );
    return res.data.data.results;
  } catch (error) {
    console.log(error.message);
  }
});

export const getHeroComics = createAsyncThunk('hero/comics', async id => {
  let ts = 1;
  const hash = md5(`${ts}${Config.API_SECRET}${Config.API_KEY}`);
  try {
    const res = await axios.get(
      `${Config.API_BASE_URL}/v1/public/characters/${id}/comics?ts=${ts}&apikey=${Config.API_KEY}&hash=${hash}`,
    );
    return res.data.data.results;
  } catch (error) {
    console.log(error.message);
  }
});

export const getHeroSeries = createAsyncThunk('hero/series', async id => {
  let ts = 1;
  const hash = md5(`${ts}${Config.API_SECRET}${Config.API_KEY}`);
  try {
    const res = await axios.get(
      `${Config.API_BASE_URL}/v1/public/characters/${id}/series?ts=${ts}&apikey=${Config.API_KEY}&hash=${hash}`,
    );
    return res.data.data.results;
  } catch (error) {
    console.log(error.message);
  }
});

export const heroSlice = createSlice({
  name: 'hero',
  initialState: {
    searchHeroResults: [],
    searchHeroQuerry: '',
    firstHeroes: [],
    hero: {},
    heroComics: [],
    heroSeries: [],
    favoriteHeroes: [],
    isLoading: false,
    isError: null,
  },
  reducers: {
    searchHero: (state, action) => {
      state.searchHeroQuerry = action.payload;
    },
    addFavorites: (state, action) => {
      state.favoriteHeroes = [...state.favoriteHeroes, action.payload];
    },
  },
  extraReducers: {
    [getHeroes.fulfilled]: (state, action) => {
      state.searchHeroResults = action.payload;
      state.isLoading = false;
    },
    [getHeroes.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getHeroes.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
    [getFirstHeroes.fulfilled]: (state, action) => {
      state.firstHeroes = action.payload;
      state.isLoading = false;
    },
    [getFirstHeroes.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getFirstHeroes.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
    [getHero.fulfilled]: (state, action) => {
      state.hero = action.payload;
      state.isLoading = false;
    },
    [getHero.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getHero.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
    [getHeroComics.fulfilled]: (state, action) => {
      state.heroComics = action.payload;
      state.isLoading = false;
    },
    [getHeroComics.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getHeroComics.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
    [getHeroSeries.fulfilled]: (state, action) => {
      state.heroSeries = action.payload;
      state.isLoading = false;
    },
    [getHeroSeries.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getHeroSeries.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
  },
});

export const {searchHero, addFavorites} = heroSlice.actions;
export default heroSlice.reducer;
