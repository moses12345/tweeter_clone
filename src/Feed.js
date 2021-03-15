import {useState, useEffect} from 'react'
import db from './firebase'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import Divider from '@material-ui/core/Divider'
const Feed =()=>{
    const [posts, setposts] = useState([])
    // console.log(db.collection('posts').doc('Da24jdBu7R8kmAaFuZ2G').get().then(doc => {
    //     const data = doc.data();
    //     console.log(data)
    // }))
  // one way to get the data
    // const fetchdata =async()=>{
    //     const response=db.collection('posts');
    //     const data=await response.get()
    //     data.docs.forEach(item=>{
    //         setposts([...posts,item.data()])
    //        })
    // }

 // another to get the data   
    console.log(posts)
    console.log("this is before useeffect")
    useEffect(() => {
        // fetchdata()
        
        db.collection('posts').onSnapshot(Snapshot => {
            setposts(Snapshot.docs.map(doc => doc.data() ))
        })
    }, [])

    console.log("this after useffects")
   
    return(
        <div className="feed"> 
            <div className="feed__header">
                <h1>home </h1>
                <Divider />
                
            </div>
            <TweetBox />
        {/*passing index as another parameter curbs the key error and key is keyword can't be used as a prop*/}        
        {posts.map((post,index) =>(
         <Post 
         key = {index}
         i={index}
         displayName={post.displayName}
         username={post.username}
         verified={post.verified}
         text={post.text}
         image={post.image}
         avatar={post.avatar}
         />
        ))}
        </div>
    )
}
export default Feed