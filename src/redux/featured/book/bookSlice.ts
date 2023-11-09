import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Book {
  _id: string;
  authorName: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: any[];
}
interface WishlistItem {
  bookId: string;
  status: "toRead" | "reading" | "finished";
}

interface BooksState {
  books: Book[];
  filter: {
    searchTerm: string;
    genre: string;
    year: string;
  };
  wishlist: WishlistItem[];
}

const initialState: BooksState = {
  books: [],
  filter: {
    searchTerm: "",
    genre: "",
    year: "",
  },
  wishlist: [],
};

const booksSlice = createSlice({
  name: "books",
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
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.bookId !== action.payload
      );
    },
    updateWishlistStatus: (state, action: PayloadAction<WishlistItem>) => {
      const index = state.wishlist.findIndex(
        (item) => item.bookId === action.payload.bookId
      );
      if (index !== -1) {
        state.wishlist[index].status = action.payload.status;
      }
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  updateWishlistStatus,
  setSearchTerm,
  setGenreFilter,
  setYearFilter,
} = booksSlice.actions;
export default booksSlice.reducer;
