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

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
