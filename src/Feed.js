import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
const Feed =()=>{
    return(
        <div className="feed"> 
            <div className="feed__header">
                <h1>home </h1>
            </div>
            
            {/* <Post /> */}
            <TweetBox />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />


        </div>
    )
}
export default Feed