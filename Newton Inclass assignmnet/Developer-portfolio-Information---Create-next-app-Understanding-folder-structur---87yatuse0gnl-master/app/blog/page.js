import React from "react";
import Link from 'next/link'
const Blog = () => {


    return (
        <div id="blog-page">

            <h1>Blog page</h1>
            <h2>Checkout my awesome blogs </h2>
            <h3><a href='https://www.newtonschool.co/post/top-13-web-developer-interview-questions'>Web Development Interview questions</a></h3>
            <h3><a href='https://www.newtonschool.co/post/graph-data-structure-explained-with-examples'>Graph Data Structures</a></h3>
            <Link href="/"><button id="home-to-blog"> Go to Home</button></Link> 
           <Link href="/info"><button id="home-to-info"> Go to Info</button></Link> 
        </div>
    )
}
export default Blog