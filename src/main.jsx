import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { NotFound } from './pages/NotFound';
import ReactDOM from 'react-dom/client'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<NotFound/>} />



      {/* <Route path='/register' element={<Register/>} />
      <Route path='/library' element={<Library/>} />
      <Route path='/settings' element={<Settings/>} />
      <Route path='/library/:bookid' element={<SpecLibrary/>} />
      <Route path='/logout' element={<Logout/>} /> */}
    </Routes>
  </BrowserRouter>,
)