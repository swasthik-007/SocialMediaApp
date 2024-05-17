import Maincontainer from  './MainContainer/MainContainer'
import Input from "./Input/Input"
import PostCardContext from '../providers/PostsProvider'
import usePosts from '../hooks/usePosts'

function SocialApp(){
    const [posts,setPosts]=usePosts();
   return (
     <div>
        <PostCardContext.Provider  value={{posts,setPosts}}>
            
            <Input />
            <Maincontainer />
        </PostCardContext.Provider>
    </div>
   )
    
}
export default SocialApp;