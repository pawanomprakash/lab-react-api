import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data,setData]=useState([])

  useEffect(()=>{
  axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
  .then(res=>{
    console.log(res)
    setData(res.data.books)
  }).catch(error=>{
    console.log("status code:"+error.response.status)
    if(error.response.status===404)
    console.log("Website not found")
  })
  },[])
  return (
    <>
    {data.map((item)=>{
      console.log(item)
      return (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <div className='flex'>
            <img src={item.imageLinks.smallThumbnail} alt="" />
            <p>{item.description}</p>
          </div>
          <div id="author">
          {item.authors.map((author,index)=>{
            return <span key={index}> {author} </span>
          })}
          </div>
          <hr />
        </div>
      )
    })}
    </>
  )
}

export default App





