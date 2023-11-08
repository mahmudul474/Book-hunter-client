import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Book } from '../../models/Book';
 

export const bookApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Book'],
  endpoints: (builder) => ({
    latesgetBooks: builder.query<Book[], void>({
      query: () => '/books',
    }),
    getSingelBook: builder.query({
      query: (id) => `/book/${id}`,
      providesTags:["Book"]
    }),
    addBook: builder.mutation<Book, Partial<Book>>({
      query: (book) => ({
        url: '/book',
        method: 'POST',
        body: book,
      }),
    }),
     postReview: builder.mutation({
      query: ({id, reviews}) => ({
        url: `/book/review/${id}`,
        method: 'PUT',
        body: reviews,
      }),
      invalidatesTags: ['Book'],
    }), deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/delete/${id}`,
        method: 'DELETE',
        body:id,
      }),
    }),
    updateBook: builder.mutation({
      query: ({id,book}) => ({
        url: `/book/edit/${id}`,
        method: 'PUT',
        body: book,
      }),
    }),
   
     
  }),
});

export const { useDeleteBookMutation,usePostReviewMutation,useLatesgetBooksQuery,useUpdateBookMutation,useGetSingelBookQuery, useAddBookMutation } = bookApi;
