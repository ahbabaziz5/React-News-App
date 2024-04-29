import React from 'react'
import '../App.css'
import { useGlobalContext } from '../Context'



const Stories = () => {
  const { hits, isloading ,removePost} = useGlobalContext();


  if (isloading) {
    return (
      <h2>Loading...</h2>
    )
  }





  return (

    <>
      {
        hits.map((data) => {
          const { title, author, objectID, num_comments, url } = data
          return (
            <div key={objectID} className='card'>
              <h2 >{title}</h2>
              <p> By<span> {author}</span>|<span>{num_comments} comments</span></p>
              <div className='subCard'>
                <a href={url} target='blank'>Read More</a>
                <a href='#' onClick={()=> removePost(objectID)}>Remove</a>
              </div>
            </div>)
        })
      }


    </>

  )}


export default Stories
