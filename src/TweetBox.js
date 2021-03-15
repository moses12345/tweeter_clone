import './TweetBox.css'
import { useEffect,useState } from 'react'
import {Avatar,Button} from '@material-ui/core'
const TweetBox=()=>{
    const [tweetmessage, settweetmessage] = useState('')
    const [tweetimageurl, settweetimageurl] = useState('')
    
    return(
        <div className="tweetBox">
            <form  onSubmit={()=> console.log("cool")}>
                <div className="tweetBox__input">
                    <Avatar src="" />
                    <input onChange={(e)=>settweetmessage(e.target.value)} value={tweetmessage} type="text" placeholder="tweet here" />    
                </div>
                <input type="text" onChange={(e)=>settweetimageurl(e.target.value)} value={tweetimageurl} placeholder="Optional : img url here" className="tweetBox__input" />  
                <Button type ="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}
export default TweetBox