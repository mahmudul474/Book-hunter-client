import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Book } from '../../models/Book';
 

export const bookApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://your-backend-url/api' }),
  tagTypes: ['Book'],
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => 'books',
    }),
    addBook: builder.mutation<Book, Partial<Book>>({
      query: (book) => ({
        url: 'books',
        method: 'POST',
        body: book,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation } = bookApi;
