import { useParams } from "react-router-dom"
import { useGetSingelBookQuery } from "../redux/api/apiSlice"

export default function BookDettails() {
const {id}=useParams()



const {data, isLoading, isError}=useGetSingelBookQuery(id)



if (isLoading){
    return <div>Loading...</div>
}


  return (
    <section className="py-20 overflow-hidden bg-white font-poppins dark:bg-gray-800">
    <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
                <div className="sticky top-0 z-50 overflow-hidden ">
                    <div className="relative mb-6 lg:mb-10">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWtnHg6Pm_1pjSCW6ZD3l5KNL3u5mxKOnVQ&usqp=CAU"
                            alt="" className="object-contain w-full h-full "/>
                    </div>
                    
                </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-20">
                    <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                       
                        <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold text-left  dark:text-gray-300 md:text-4xl">
                            {data?.title}
                        </h2>
                        <div className="flex flex-wrap items-center mb-6">
                            <ul className="flex mb-4 mr-2 lg:mb-0">
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <a className="mb-4 text-xs underline dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                                href="#">
                                Be the first to review the product
                            </a>
                        </div>
                        <p className="max-w-md mb-8 text-left text-gray-700 dark:text-gray-400">
                          Genre:  {data?.genre}
                        </p>
                        <p className="max-w-md mb-8 text-left text-gray-700 dark:text-gray-400">
                          Author Name:  {data?.authorName}
                        </p>
                        <p className="max-w-md mb-8 text-left text-gray-700 dark:text-gray-400">
                          Publish Date:  {data?.publicationDate}
                        </p>
                      
                    </div>
                     
                   
                  
                </div>
            </div>
        </div>
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
  <div className="max-w-2xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion (20)</h2>
    </div>
    <form className="mb-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" className="sr-only">Your comment</label>
            <textarea id="comment" rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required></textarea>
        </div>
        <button type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Post comment
        </button>
    </form>
    <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"/>Michael Gough</p>
                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                        title="February 8th, 2022">Feb. 8, 2022</time></p>
            </div>
            <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
                <span className="sr-only">Comment settings</span>
            </button>
          
            <div id="dropdownComment1"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                </ul>
            </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
            instruments for the UX designers. The knowledge of the design tools are as important as the
            creation of the design strategy.</p>
        <div className="flex items-center mt-4 space-x-4">
            <button type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>
                Reply
            </button>
        </div>
    </article>
    
  
    
  </div>
</section>
    </div>
</section>
  )
}
