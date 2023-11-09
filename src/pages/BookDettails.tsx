import { Link, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingelBookQuery,
} from "../redux/api/apiSlice";
import { useAppSelector } from "../redux/hook";
import BookReview from "../componets/BookReview";
import { useState } from "react";
import ConfirmationModal from "../componets/ConfirmationModal";

export default function BookDettails() {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.user);

  const [isopenModal, setIsopenModal] = useState<boolean>(false);
  const handelModal = () => {
    setIsopenModal(true);
  };
  const handelclose = () => {
    setIsopenModal(false);
  };

  const { data, isLoading, isError } = useGetSingelBookQuery(id);
  const [deleteBook] = useDeleteBookMutation();

  const handleDeleteProduct = (id: string) => {
    deleteBook({id,user});
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }


  console.log(user)

  return (
    <>
      <section className="py-20 overflow-hidden bg-white font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 z-0  lg:mb-10">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWtnHg6Pm_1pjSCW6ZD3l5KNL3u5mxKOnVQ&usqp=CAU"
                    alt=""
                    className="object-contain z-0 w-full h-full "
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                  
                    <div className="flex justify-start ">
                      <Link to={`/book/edit/${data?._id}`}>
                        <button
                          type="button"
                          className="btn p-3 px-7 rounded-xl m-2 bg-green-600 text-white"
                        >
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={handelModal}
                        type="button"
                        className="p-3 px-7 rounded-xl m-2 bg-red-600 text-white btn"
                      >
                        Delete
                      </button>
                    </div>
                

                  <h2 className="max-w-xl capitalize mt-2 mb-6 text-xl font-bold text-left  dark:text-gray-300 md:text-4xl">
                    {data?.title}
                  </h2>
                  <div className="flex flex-wrap items-center mb-6">
                    <ul className="flex mb-4 mr-2 lg:mb-0">
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                    <a
                      className="mb-4 text-xs underline dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                      href="#"
                    >
                      ({data && data.reviews && data.reviews.length})
                    </a>
                  </div>
                  <p className="max-w-md mb-8 text-left text-gray-700 dark:text-gray-400">
                    Genre: {data?.genre}
                  </p>
                  <p className="max-w-md mb-8 text-left text-gray-700 dark:text-gray-400">
                    Author Name: {data?.authorName}
                  </p>
                  <p className="max-w-md mb-8 text-left text-gray-700 dark:text-gray-400">
                    Publish Date: {data?.publicationDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <BookReview book={data}></BookReview>
        </div>
      </section>
      {isopenModal === true && (
        <div className="fixed top-0 z-50 left-0 w-full h-full bg-black flex justify-center items-center">
          <div className="text-white">
           
            <p className="py-4">Are you sure Delete <span className="text-red-400 text-xl capitalize">{data?.title}</span>  ?</p>
            <div className="modal-action">
              <label
                onClick={() => handleDeleteProduct(data?._id)} // Use an arrow function to delay the function call
                htmlFor="my_modal_6"
                className="btn"
              >
                Delete
              </label>
              <label onClick={handelclose} htmlFor="my_modal_6" className="btn">
                Close !
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
