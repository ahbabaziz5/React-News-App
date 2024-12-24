import React from 'react'
import { useGlobalContext } from '../Context'
import '../App.css'

const Pagination = () => {
  const {page,nbPages,prevPage,nextPage} = useGlobalContext()
  return (
   <>
   <div style={{textAlign:"center"}}>
    <button onClick={()=> prevPage()}>
     PREV
    </button>
    <span> {page + 1}  or  {nbPages} </span>
    <button onClick={()=> nextPage()}>
  NEXT
    </button>
   </div>
   
   </>
  )
}

export default Pagination
