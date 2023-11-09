import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Book } from '../../models/Book';
 

export const bookApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Book'],
  endpoints: (builder) => ({
    latesgetBooks: builder.query<Book[], void>({
      query: () => '/books',
    }),
    allbooks: builder.query<Book[] | undefined, void>({
      query: () => '/allbooks',
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
    }), 
    deleteBook: builder.mutation({
      query: ({id,user}) => ({
        url: `/book/delete/${id}`,
        method: 'DELETE',
        body:{user},
      }),
    }),
    updateBook: builder.mutation({
      query: ({id,book,user}) => ({
        url: `/book/edit/${id}`,
        method: 'PUT',
        body: {user,book},
      }),
    }),
   
     
  }),
});

export const { useAllbooksQuery,useDeleteBookMutation,usePostReviewMutation,useLatesgetBooksQuery,useUpdateBookMutation,useGetSingelBookQuery, useAddBookMutation } = bookApi;
