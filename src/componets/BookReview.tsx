import { useState, FormEvent } from "react";
import { usePostReviewMutation } from "../redux/api/apiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookReview({ book }: any) {
  const [review, setReviwe] = useState<string>("");
  const [postReview, { isLoading }] = usePostReviewMutation();





  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (review === "") {
      alert("Please enter a review");
      return;
    }

    const reviewData = {
      id: book._id,
      reviews: { reviews: review },
    };
 

    try {
      await postReview(reviewData);
      toast.success("Review posted successfully!",{autoClose:3000});
      setReviwe("")
      
    } catch (error) {
      toast.error("An error occurred while posting the review.");
    }
  };


  if(isLoading){
   return <h1>Loading ...</h1>
  }

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Reviews ({book&& book.reviews && book.reviews.length})
          </h2>
        </div>
        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              onChange={(e) => setReviwe(e.target.value)}
              id="comment"
              value={review}
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={ handleSubmit}
            className="inline-flex  items-start py-2.5 px-4 text-xs font-medium text-center text-white bg-green-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-black "
          >
            Post A Review
          </button>
        </form>

        {book && [...book.reviews].reverse().map((review:{reviews:string})=> <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                />
              User
              </p>
               
            </div>
            

            
          </footer>
          <p className="text-gray-500 text-left dark:text-gray-400">
            {review?.reviews}
          </p>
         
        </article>)}
       
      </div>
    </section>
  );
}
