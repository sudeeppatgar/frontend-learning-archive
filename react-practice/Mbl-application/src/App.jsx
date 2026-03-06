import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NewsPage from './FullPages/NewsPage/NewsPage';
// import DetailPage from './FullPages/DetailPage/DetailPage'

function App() {

  return (
      <div>
      <Router>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/details" element={<DetailPage />} />
      </Routes>
      </Router>
      </div>
  )
}

export default App
