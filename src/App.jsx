import React from 'react'
import PropertyCreate from './components/PropertyCreate'
import PropertyList from './components/PropertyList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PropertyDetail from './components/PropertyDetail'

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='all/' element={<PropertyList></PropertyList>}></Route>
        <Route path='add/' element={<PropertyCreate></PropertyCreate>}></Route>
        <Route path='properties/:id/' element={<PropertyDetail></PropertyDetail>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App