import { useState } from "react";
import logo from "../assates/logo.png";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { logoutUser } from "../redux/featured/user/registrationSlice";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <img src={logo} className="h-24" alt="book-hunter" />
        </a>
        <ul className="flex items-center hidden space-x-8 lg:flex">
        <Link to="/allbook"> 
        
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              All-Book
            </a>
          </li> </Link>
        </ul>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          {user ? (
            <>
              <Link to="/addbook">
                <a
                  className="inline-flex items-center text-red-500 font-bold justify-center h-12 px-6 cursor-pointer tracking-wide   transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="AddBook"
                  title="addBook"
                >
                  ADD NEW BOOK
                </a>
              </Link>
              <a
                onClick={handleLogout}
                className="inline-flex items-center text-red-500 font-bold justify-center h-12 px-6 cursor-pointer tracking-wide   transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="logOut"
                title="logout"
              >
                Log-out
              </a>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Login"
                    title="Login"
                  >
                    Sign-in
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Login"
                    title="Login"
                  >
                    Register
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white z-50 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <img src={logo} />
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                   
                   <Link to="/allbook"> <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        All Book
                      </a>
                    </li></Link>

                    {user ? (
                      <>
                        <Link to="/addbook">
                          <a
                            className="inline-flex items-center text-red-500 font-bold justify-center h-12 px-6 cursor-pointer tracking-wide   transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="AddBook"
                            title="addBook"
                          >
                            ADD NEW BOOK
                          </a>
                        </Link>

                        <li>
                          <a
                            onClick={handleLogout}
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-red-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Log-Out
                          </a>
                        </li>
                      </>
                    ) : (
                      <li>
                        <Link to="/register">
                          <a
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </a>
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
