import React from 'react'

export default function Article({articles}) {
  return (
    <div className="article-container">
        <div className="article-header">
            <img src={articles.author.profileImage} alt="author"
            className='author-image' />
            <div className='article-info'>
                <h1>{articles.title}</h1>
                <p>By : {articles.author.name}</p>
            </div>
        </div>
        <p className="article-content">{articles.content}</p>
        <div className='article-footer'>
            <img src={articles.channel.image} alt="Channel" 
            className='channel-image' />
            <p>Channel: {articles.channel.name}</p>
            <div className="article-stats">
                <p>Likes:{articles.likeCount}</p>
                <p>Comment:{articles.commentCount}</p>
            </div>
        </div>
    </div>
  )
}
