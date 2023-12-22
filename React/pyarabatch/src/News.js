import React, { Component } from 'react'
import NewsItem from "./NewsItem.js"
export default class News extends Component {
  constructor(){
    super()
    this.state ={
        articles : "",
        searchNews:"",

    }
  }
   getNews=async()=>{
    const data = await fetch(`https://newsapi.org/v2/everything?q=${this.state.searchNews}&from=2023-11-22&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e`)
    const response=await data.json()
    this.setState({articles:response.articles})
  }
   componentDidMount(){
     this.getNews();
  }
  handleSearch=(e)=>{
    e.preventDefault();
    this.getNews();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}> 
            <input type="text" name="search" 
            onChange={(e)=>{this.setState({searchNews:e.target.value})}} placeholder="Search for news..." />
            <button type='submit'>Search</button>
        </form>
        {
          this.state.articles && (
            <div className='row'>
                {this.state.articles.map((item,index)=>(
                    <NewsItem title={item.title} 
                    description={item.description} 
                    author={item.author}
                    url={item.url}
                    image={item.urlToImage}/>
                ))}
            </div>
          )
        }
      </div>
    )
  }
}
