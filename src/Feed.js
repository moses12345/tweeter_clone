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
  
    // console.log( db.collection('posts').onSnapshot(Snapshot => (
    //     setposts(Snapshot.docs.map(doc => doc.data))
    //   )))
    const fetchdata =async()=>{
        const response=db.collection('posts');
        const data=await response.get()
        data.docs.forEach(item=>{
            setposts([...posts,item.data()])
           })
    }
    
    useEffect(() => {
        fetchdata()
    }, [])
    console.log(posts)
    return(
        <div className="feed"> 
            <div className="feed__header">
                <h1>home </h1>
                <Divider />
                <TweetBox />
            </div>

            console.log(posts);
        </div>
    )
}
export default Feed