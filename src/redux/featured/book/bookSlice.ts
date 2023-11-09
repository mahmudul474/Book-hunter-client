// src/features/books/booksSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
  _id: string;
  authorName: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: any[];
}

interface BooksState {
  books: Book[];
  filter: {
    searchTerm: string;
    genre: string;
    year: string;
  };
}

const initialState: BooksState = {
  books: [], 
  filter: {
    searchTerm: '',
    genre: '',
    year: '',
  },
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.filter.searchTerm = action.payload;
    },
    setGenreFilter: (state, action: PayloadAction<string>) => {
      state.filter.genre = action.payload;
    },
    setYearFilter: (state, action: PayloadAction<string>) => {
      state.filter.year = action.payload;
    },
  },
});

export const { setSearchTerm, setGenreFilter, setYearFilter } = booksSlice.actions;
export default booksSlice.reducer;
