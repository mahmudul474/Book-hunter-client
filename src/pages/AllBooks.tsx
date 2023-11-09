import { useAllbooksQuery } from "../redux/api/apiSlice";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hook";

import SearBar from "../componets/SearBar";
import Filter from "../componets/Filter";
import { addToWishlist } from "../redux/featured/book/bookSlice";

export default function AllBooks() {
  const { data: bookData, isLoading, isError } = useAllbooksQuery();
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.book);

  const filteredBooks = bookData
    ? bookData.filter((book) => {
        const titleMatch =
          book.title &&
          book.title.toLowerCase().includes(filter.searchTerm.toLowerCase());
        const authorMatch =
          book.authorName &&
          book.authorName
            .toLowerCase()
            .includes(filter.searchTerm.toLowerCase());
        const genreMatch = !filter.genre || book.genre === filter.genre;
        const yearMatch =
          !filter.year || book.publicationDate.includes(filter.year);

        const isMatchingBook = (titleMatch || authorMatch) && genreMatch;

        if (isMatchingBook) {
          console.log(
            `Matching book: ${book.title} (Author: ${book.authorName}, Genre: ${book.genre})`
          );
        }

        return isMatchingBook;
      })
    : [];

  const handleAddToWishlist = (bookId: string) => {
    if (bookId) {
      dispatch(addToWishlist({ bookId, status: "toRead" }));
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Books
            </h1>
          </div>

          <section aria-labelledby="products-heading">
            <SearBar></SearBar>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <Filter></Filter>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {filteredBooks &&
                  filteredBooks.map((book) => (
                    <div className="flex flex-col justify-center my-5">
                      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                        <div className="w-full md:w-1/3 bg-white grid place-items-center">
                          <img
                            src="https://www.acadecraft.com/blog/uploads/blog/2022/07/Indexing.jpg"
                            alt="tailwind logo"
                            className="rounded-xl"
                          />
                        </div>
                        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                          <div className="flex justify-between item-center">
                            <p className="text-gray-500 font-medium hidden md:block">
                              Publish :{book?.publicationDate}
                            </p>
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-yellow-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <p className="text-gray-600 font-bold text-sm ml-1">
                                <span className="text-gray-500 font-normal">
                                  {" "}
                                  ({book && book.reviews && book.reviews.length}
                                  ) reviews
                                </span>
                              </p>
                            </div>
                            <div className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-pink-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>

                            <Link to={`/book/${book?._id}`}>
                              {" "}
                              <div className="bg-gray-200 px-3    py-1 rounded-full text-xs font-medium  k text-gray-800 ">
                                See Details
                              </div>
                            </Link>
                          </div>
                          <h3 className="font-black  capitalize text-gray-800 md:text-xl text-xl">
                            Title:{book.title}
                          </h3>
                          <p className="md:text-lg capitalize text-gray-500 text-base">
                            genre: {book?.genre}
                          </p>
                          <p className="text-xl font-black  capitalize text-gray-800">
                            Author: {book?.authorName}
                            <span className="font-normal text-gray-600 text-base"></span>
                          </p>

                          <Link to="/wishlist">
                            <button
                              className="btn"
                              onClick={() =>
                                handleAddToWishlist(book._id as string)
                              }
                            >
                              Add to Wishlist
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            
          </section>
        </main>
      </div>
    </div>
  );
}
