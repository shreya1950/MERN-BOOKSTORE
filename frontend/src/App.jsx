import React from 'react'
import {Route, Routes} from "react-router"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import BookDetailPage from "./pages/BookDetailPage"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/book/:id" element={<BookDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App
