
import { useContext } from "react";
import PostCard from "../postCard";
import PostCardContext from "../../providers/PostsProvider";


function PostCardList(){
  const {posts}=useContext(PostCardContext);

// const {posts,setPosts}=useContext(PostCardContext);//now this data is coming from the context api (not llocal to the card only)
//   useEffect(()=> {
//     // we will dload theh content from dummy api
//     console.log(import.meta.env.VITE_APP_ID)
//     axios.get("https://dummyapi.io/data/v1/post", {
//         headers: {'app-id':import.meta.env.VITE_APP_ID}

//     })
//     .then(response =>{
//         const responseObject=response.data;
//         setPosts([...responseObject.data]);
//     })
// },[posts]);
    return (
       (posts.length==0)? "loading...":   posts.map((post)=> <PostCard 
        content={post.text} 
        image={post.image}
        authorfirstname={post.owner.firstName}
        key={post.id} />)
       
    );
}
export default PostCardList;