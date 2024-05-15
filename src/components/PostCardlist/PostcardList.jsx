
import PostCard from "../postCard";
import { useEffect, useState } from "react";
import axios from "axios"

function PostCardList(){
  const [posts,setPosts]=useState([]);
  useEffect(()=> {
    // we will dload theh content from dummy api
    console.log(import.meta.env.VITE_APP_ID)
    axios.get("https://dummyapi.io/data/v1/post", {
        headers: {'app-id':import.meta.env.VITE_APP_ID}

    })
    .then(response =>{
        const responseObject=response.data;
        setPosts([...responseObject.data]);
    })
},[]);
    return (
       (posts.length==0)? "loading...":   posts.map((post)=> <PostCard 
        content={post.text} 
        image={post.image}
        authorfirstname={post.owner.firstName}
        key={post.id} />)
       
    );
}
export default PostCardList;