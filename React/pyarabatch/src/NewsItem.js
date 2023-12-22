import React from 'react'

export default function NewsItem({title,description,author,url,image}) {
  return (
    <div className='card'>
      <img style={{width:"150px",height:"150px"}} src={image} alt={author}/>
      <h1>Author:  {author}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <small><a href={url}>Read more</a></small>
    </div>
  )
}
