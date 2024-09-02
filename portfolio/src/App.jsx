import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Homescreen from './pages/homescreen/Homescreen';

export default function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homescreen />} />
      </Routes>
    </BrowserRouter>


  )
}

