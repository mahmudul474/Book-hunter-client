import { useAllbooksQuery } from "../redux/api/apiSlice";
import {
  removeFromWishlist,
  updateWishlistStatus,
} from "../redux/featured/book/bookSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

export default function WishtLisht() {
  const { data } = useAllbooksQuery();
  const dispatch = useAppDispatch();
  const { wishlist } = useAppSelector((state) => state.book);

  const books: any = data;

  const handleRemoveFromWishlist = (bookId: string) => {
    dispatch(removeFromWishlist(bookId));
  };

  const handleUpdateWishlistStatus = (
    bookId: string,
    status: "toRead" | "reading" | "finished"
  ) => {
    dispatch(updateWishlistStatus({ bookId, status }));
  };

  return (
    <div>
      <h2>My Wishlist</h2>
      <div className="grid grid-cols-1  gap-5 lg:grid-cols-3 md:grid-cols-2">
        {wishlist.map((wishlistItem) => {
          const book = books.find(
            (book: any) => book?._id === wishlistItem.bookId
          );

          if (!book) {
            return (
              <div key={wishlistItem.bookId}>
                <p>Book not found</p>
                <p>Status: {wishlistItem.status}</p>
              </div>
            );
          }

          return (
            <div key={wishlistItem.bookId}>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Book Name: {book.title}
                  </h5>
                </a>
                <p>Author: {book.authorName}</p>
                <p>Genre: {book.genre}</p>
                <p>Publication Date: {book.publicationDate}</p>

                <a
                  href="#"
                  className="inline-flex capitalize items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Status: {wishlistItem.status}
                </a>

                <div className="flex flex-col space-y-3">
                  <button
                    className="btn"
                    onClick={() => handleRemoveFromWishlist(book._id)}
                  >
                    Remove from Wishlist
                  </button>
                  <button
                    className="btn"
                    onClick={() =>
                      handleUpdateWishlistStatus(book._id, "toRead")
                    }
                  >
                    ark as Reading
                  </button>
                  <button
                    className="btn"
                    onClick={() =>
                      handleUpdateWishlistStatus(book._id, "finished")
                    }
                  >
                    Mark as Finished
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
