import './TweetBox.css'
import {Avatar,Button} from '@material-ui/core'
const TweetBox=()=>{
    return(
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="" />
                    <input type="text" placeholder="tweet here" />    
                </div>
                <input type="text" placeholder="Optional : img url here" className="tweetBox__input" />  
                <Button className="tweetBox__tweetButton">Tweet</Button>

            </form>
        </div>
    )
}
export default TweetBox