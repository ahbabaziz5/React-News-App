import React from 'react'
import './App.css';
import Stories from './Component/Stories'
import Search from './Component/Search'
import Pagination from './Component/Pagination';


const App = () => {
  return (

    <div className='first'>
      <h1> News App</h1>
      <Search />
      <Pagination />

      <Stories />

    </div>

  )
}

export default App
