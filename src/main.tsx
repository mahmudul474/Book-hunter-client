import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { routes } from './routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ToastContainer  } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}> 
    <ToastContainer />
    <RouterProvider router={routes}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
