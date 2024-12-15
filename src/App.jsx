import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import DetailsPage from './components/DetailsPage/DetailsPage'
import HomePage from './components/HomePage/HomePage'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/games/:id' element={<DetailsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
