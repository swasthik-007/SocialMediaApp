import Maincontainer from  './MainContainer/MainContainer'
import NavBar from "./NavBar/NavBar"
import Input from "./Input/Input"
import PostCardContext from '../providers/PostsProvider'
import { useState } from 'react'


function SocialApp(){
  const [posts,setPosts]=useState([]);
   return (
     <div>
        <PostCardContext.Provider  value={{posts,setPosts}}>
            <NavBar/>
            <Input />
            <Maincontainer/>
        </PostCardContext.Provider>
    </div>
   )
    
}
export default SocialApp;