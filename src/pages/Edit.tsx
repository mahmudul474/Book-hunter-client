

import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Book } from "../models/Book";
import { useAppSelector } from "../redux/hook";
import { useParams } from "react-router-dom";
import {
  useGetSingelBookQuery,
  useUpdateBookMutation,
} from "../redux/api/apiSlice";

function Edit() {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const { id } = useParams();


  const { data: bookData ,} = useGetSingelBookQuery(id);
  const [updateBook, { isError }] = useUpdateBookMutation();

  console.log(bookData)

  const [book, setBook] = useState<Book>({
    authorName: bookData?.authorName,
    title: bookData?.title,
    author: bookData?.author,
    genre: bookData?.genre,
    publicationDate: bookData?.publicationDate,
    reviews: bookData?.reviews,
  });

  useEffect(() => {
    if (bookData) {
      setBook(bookData);
    }
  }, [bookData]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const option={
        id:id,
        book:{book}
    }
    updateBook(option)
  };

  if (isLoading || !id || !bookData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-4   py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h1>Add Book</h1>
      <form className="flex flex-col lg:w-2/3 w-full m-auto   ">
        <input
          type="text"
          required
          placeholder="Title"
          className="p-3 border  border-black capitalize my-3"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        />

        <input
          type="text"
          placeholder="Author Name "
          className="p-3 border  border-black capitalize my-3"
          value={book.authorName}
          onChange={(e) => setBook({ ...book, authorName: e.target.value })}
        />

        <input
          type="text"
          className="p-3 border  border-black capitalize my-3"
          placeholder="Genre"
          value={book.genre}
          onChange={(e) => setBook({ ...book, genre: e.target.value })}
        />
        <input
          className="p-3 border  border-black capitalize my-3"
          placeholder="Publication Date"
          type="date"
          value={book.publicationDate}
          onChange={(e) =>
            setBook({ ...book, publicationDate: e.target.value })
          }
        />
       
        <button
          className="border    m-auto p-3 px-6 rounded-xl  border-black hover:bg-transparent hover:text-black bg-black text-white "
          type="submit"
          onClick={handleSubmit}
        >
        Uptade Book
        </button>
      </form>
    </div>
  );
}

export default Edit;
