import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import TodoPage from './pages/TodoPage/TodoPage.jsx'
import BasicsPage from './pages/BasicsPage/BasicsPage.jsx'
import EventsPage from './pages/EventsPage/EventsPage.jsx'
import CounterPage from './pages/CounterPage/CounterPage.jsx'
import ConcertCityPage from './pages/ConcertCityPage/ConcertCityPage.jsx'
import PostsPage from './pages/PostsPage/PostsPage.jsx'
import PostPage from './pages/PostPage/PostPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<App />}></Route> */}
        <Route index element={<App />}></Route>

        <Route path='basics'>
          <Route index element={<h1>Basics Page</h1>}></Route>
          <Route path='services' element={<BasicsPage />}></Route>
          <Route path='events' element={<EventsPage />}></Route>
          <Route path='counter' element={<CounterPage />}></Route>
          <Route path='todos' element={<TodoPage />}></Route>
        </Route>

        <Route path='concerts'>
          <Route index element={<h1>Concerts Index Page</h1>}></Route>
          <Route path=':city' element={<ConcertCityPage />}></Route>
        </Route>

        <Route path='api-project'>
          <Route path='posts'>
            <Route index element={<PostsPage />}></Route>
            <Route path=':postId' element={<PostPage />}></Route>
          </Route>
        
          <Route path='users'>
            <Route index element={<h1>Users Page</h1>}></Route>
            <Route path=':userId' element={<h1>User Page</h1>}></Route>
          </Route>
        
          <Route path='todos'>
            <Route index element={<h1>Todos Page</h1>}></Route>
            <Route path=':todoId' element={<h1>Todo Page</h1>}></Route>
          </Route>
        
          <Route path='comments'>
            <Route index element={<h1>Comments Page</h1>}></Route>
            <Route path=':commentId' element={<h1>Comment Page</h1>}></Route>
          </Route>
        
          <Route path='albums'>
            <Route index element={<h1>Albums Page</h1>}></Route>
            <Route path=':albumId' element={<h1>Album Page</h1>}></Route>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
