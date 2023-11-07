import React, { useState } from "react";

import { Book } from "../models/Book";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import toast from "react-hot-toast/headless";
import { useAddBookMutation } from "../redux/api/apiSlice";

function AddBook() {
  const { user, isLoading } = useAppSelector((state) => state.user);
const [addBook,{isError}]=useAddBookMutation()
 



  const [book, setBook] = useState<Book>({
    img: "",
    title: "",
    author: (user as any)?.email || "",
    genre: "",
    publicationDate: "",
    reviews: [],
  });

  const dispatch = useAppDispatch();


  const [error, setError] = useState<string>("");
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (book.title === "") {
      setError("Please enter title");
    } else if (book.genre === "") {
      setError("Please enter genre");
    }
    else if (book.publicationDate === "") {
      setError("Please enter publication date");
    }else{
     addBook(book)
      setBook({
        img: "",
        title: "",
        author: (user as any)?.email || "",
        genre: "",
        publicationDate: "",
        reviews: [],
      });
      toast.success("Book added successfully");
    }
  };

  if (isLoading) {
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
          placeholder="Img url "
          className="p-3 border  border-black capitalize my-3"
          value={book.img}
          onChange={(e) => setBook({ ...book, img: e.target.value })}
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
        <p className="text-red-500  font-bold my-2">{error}</p>
        <button
          className="border    m-auto p-3 px-6 rounded-xl  border-black hover:bg-transparent hover:text-black bg-black text-white "
          type="button"
          onClick={handleSubmit}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
