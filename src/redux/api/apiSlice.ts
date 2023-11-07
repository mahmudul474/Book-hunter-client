import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Book } from '../../models/Book';
 

export const bookApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Book'],
  endpoints: (builder) => ({
    latesgetBooks: builder.query<Book[], void>({
      query: () => '/books',
    }),
    addBook: builder.mutation<Book, Partial<Book>>({
      query: (book) => ({
        url: '/book',
        method: 'POST',
        body: book,
      }),
    }),
  }),
});

export const { useLatesgetBooksQuery, useAddBookMutation } = bookApi;
