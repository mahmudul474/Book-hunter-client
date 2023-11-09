import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
 
  FunnelIcon,
  MinusIcon,
  PlusIcon,
 
} from "@heroicons/react/20/solid";
import { useAllbooksQuery } from "../redux/api/apiSlice";
import { Link } from "react-router-dom";
import {
  setGenreFilter,
  setSearchTerm,
  setYearFilter,
} from "../redux/featured/book/bookSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { Book } from "../models/Book";

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
];

export default function AllBooks() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { data: bookData, isLoading, isError } = useAllbooksQuery();

  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.book);

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenreFilter(e.target.value));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setYearFilter(e.target.value));
  };


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };



  const filteredBooks = bookData
  ? bookData.filter((book) => {
      console.log('book', book);
      console.log('filter', filter);

      const titleMatch =
        book.title && book.title.toLowerCase().includes(filter.searchTerm.toLowerCase());
      const authorMatch =
        book.authorName &&
        book.authorName.toLowerCase().includes(filter.searchTerm.toLowerCase());
      const genreMatch = !filter.genre || book.genre === filter.genre;
      const yearMatch = !filter.year || book.publicationDate.includes(filter.year);

      return titleMatch && authorMatch && genreMatch && yearMatch;
    })
  : [];


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Books{" "}
            </h1>

            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading">
            <input
              type="text"
              placeholder="Search by Title, Author, or Genre"
           onChange={handleSearch}
            />
            ;
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <div>
                <label>Filter by Genre:</label>
                <select onChange={handleGenreChange} value={filter.genre}>
                  <option value="">All Genres</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Science Fiction">Science Fiction</option>
                  {/* Add more genre options as needed */}
                </select>

                <label>Filter by Publication Year:</label>
                <input
                  type="number"
                  placeholder="Publication Year"
                  onChange={handleYearChange}
                  value={filter.year}
                />
              </div>

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
