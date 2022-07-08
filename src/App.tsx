import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// pages
import { Home } from './pages/Home'
import { Page404 } from './pages/Page404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
