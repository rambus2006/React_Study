// React 와 ReactDOM 에서 뭔가를 받아옴 (package .json )
import React from 'react' 
import ReactDOM from 'react-dom/client'
import { RouterProvider,createBrowserRouter} from 'react-router-dom';
import Posts,{ loader as postsLoader } from './routes/Posts'
import NewPost,{ action as newPostAction} from './routes/NewPost';
import PostDetails,{loader as PostDetailsLoader } from './routes/PostDetails';
import './index.css'
import RootLayout from './routes/RootLayout';

const router = createBrowserRouter([
    { 
      path:'/',
      element:<RootLayout/>,
      children:[
        { 
          path:'/',
          element: <Posts/>,
          loader: postsLoader,
          children:[
            { path:'/create-post', element:<NewPost/>, action: newPostAction },
            { path:'/:id', element:<PostDetails/>, loader:PostDetailsLoader}
          ],  
        },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
