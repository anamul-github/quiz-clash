
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import AllQuiz from './components/AllQuiz/AllQuiz';
import Topic from './components/Topic/Topic';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/topic',
          element: <Topic></Topic>
        },
        {
          path: '/topic/:id',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <AllQuiz></AllQuiz>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '*',
      element: <div className='text-center fs-1 fw-bolder mt-3 text-danger'>This route is not found!!! <br /> <br /> 404</div>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
