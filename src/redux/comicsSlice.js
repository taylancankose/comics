import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import md5 from 'md5';
import Config from 'react-native-config';

export const getComics = createAsyncThunk('search', async searchComicQuerry => {
  let ts = 1;
  const hash = md5(`${ts}${Config.API_SECRET}${Config.API_KEY}`);
  try {
    const res = await axios.get(
      `${Config.API_BASE_URL}/v1/public/comics?ts=${ts}&apikey=${Config.API_KEY}&hash=${hash}&titleStartsWith=${searchComicQuerry}`,
    );
    return res.data.data.results;
  } catch (error) {
    console.log(error.message);
  }
});

export const getFirstComics = createAsyncThunk('comics', async () => {
  let ts = 1;
  const hash = md5(`${ts}${Config.API_SECRET}${Config.API_KEY}`);
  try {
    const res = await axios.get(
      `${Config.API_BASE_URL}/v1/public/comics?ts=${ts}&apikey=${Config.API_KEY}&hash=${hash}`,
    );
    return res.data.data.results;
  } catch (error) {
    console.log(error.message);
  }
});

export const getComic = createAsyncThunk('comic', async id => {
  let ts = 1;
  const hash = md5(`${ts}${Config.API_SECRET}${Config.API_KEY}`);
  try {
    const res = await axios.get(
      `${Config.API_BASE_URL}/v1/public/comics/${id}?ts=${ts}&apikey=${Config.API_KEY}&hash=${hash}`,
    );
    return res.data.data.results;
  } catch (error) {
    console.log(error.message);
  }
});

export const getComicCharacters = createAsyncThunk(
  'comics/characters',
  async id => {
    let ts = 1;
    const hash = md5(`${ts}${Config.API_SECRET}${Config.API_KEY}`);
    try {
      const res = await axios.get(
        `${Config.API_BASE_URL}/v1/public/comics/${id}/characters?ts=${ts}&apikey=${Config.API_KEY}&hash=${hash}`,
      );
      return res.data.data.results;
    } catch (error) {
      console.log(error.message);
    }
  },
);

export const getComicCreators = createAsyncThunk(
  'comics/creators',
  async id => {
    let ts = 1;
    const hash = md5(`${ts}${Config.API_SECRET}${Config.API_KEY}`);
    try {
      const res = await axios.get(
        `${Config.API_BASE_URL}/v1/public/comics/${id}/creators?ts=${ts}&apikey=${Config.API_KEY}&hash=${hash}`,
      );
      return res.data.data.results;
    } catch (error) {
      console.log(error.message);
    }
  },
);

export const comicsSlice = createSlice({
  name: 'comics',
  initialState: {
    searchComicsResults: [],
    searchComicQuerry: '',
    firstComics: [],
    comic: {},
    comicCharacters: [],
    comicCreators: [],
    favoriteComics: [],
    isLoading: false,
    isError: null,
  },
  reducers: {
    searchComics: (state, action) => {
      state.searchComicQuerry = action.payload;
    },
    addFavorites: (state, action) => {
      state.favoriteComics = [...state.favoriteComics, action.payload];
    },
    removeFavorite: (state, action) => {
      state.favoriteComics = state.favoriteComics.filter(
        item => item.id !== action?.payload?.id,
      );
    },
  },
  extraReducers: {
    [getComics.fulfilled]: (state, action) => {
      state.searchComicsResults = action.payload;
      state.isLoading = false;
    },
    [getComics.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getComics.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
    [getFirstComics.fulfilled]: (state, action) => {
      state.firstComics = action.payload;
      state.isLoading = false;
    },
    [getFirstComics.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getFirstComics.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
    [getComic.fulfilled]: (state, action) => {
      state.comic = action.payload;
      state.isLoading = false;
    },
    [getComic.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getComic.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
    [getComicCharacters.fulfilled]: (state, action) => {
      state.comicCharacters = action.payload;
      state.isLoading = false;
    },
    [getComicCharacters.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getComicCharacters.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
    [getComicCreators.fulfilled]: (state, action) => {
      state.comicCreators = action.payload;
      state.isLoading = false;
    },
    [getComicCreators.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getComicCreators.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
  },
});

export const {searchComics, addFavorites, removeFavorite} = comicsSlice.actions;
export default comicsSlice.reducer;
