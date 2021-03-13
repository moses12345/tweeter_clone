import './Feed.css'
import TweetBox from './TweetBox'
const Feed =()=>{
    return(
        <div className="feed"> 
            <div className="feed__header">
                <h1>home </h1>
            </div>
            
            {/* <Post /> */}
            <TweetBox />


        </div>
    )
}
export default Feed