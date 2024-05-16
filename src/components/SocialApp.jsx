import Maincontainer from  './MainContainer/MainContainer'
import NavBar from "./NavBar/NavBar"
import Input from "./Input/Input"
import PostCardContext from '../providers/PostsProvider'
import { useState ,useEffect} from 'react'
import axios from 'axios'

function SocialApp(){
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
     <div>
        <PostCardContext.Provider  value={{posts,setPosts}}>
            <NavBar/>
            <Input />
            <Maincontainer />
        </PostCardContext.Provider>
    </div>
   )
    
}
export default SocialApp;