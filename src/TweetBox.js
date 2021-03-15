import './TweetBox.css'
import { useEffect,useState } from 'react'
import {Avatar,Button} from '@material-ui/core'
import db from './firebase'
import uuid from 'react-uuid'
const TweetBox=()=>{
    const [tweetmessage, settweetmessage] = useState('')
    const [tweetimageurl, settweetimageurl] = useState('')
    const unique_id=uuid()
    const sumbitdata =e=>{
        e.preventDefault()

        db.collection('posts').doc(unique_id).set({
            id:unique_id,
            displayName:"cooool1",
            username:"cooooool1",
            verified:true,
            text:tweetmessage,
            image:tweetimageurl,
            avatar:"https://media.giphy.com/media/pUDdiByLQZ3MSeYuvN/giphy.gif",
        })

    }
    
    return(
        <div className="tweetBox">
            <form  onSubmit={()=> console.log("cool")}>
                <div className="tweetBox__input">
                    <Avatar src="" />
                    <input onChange={(e)=>settweetmessage(e.target.value)} value={tweetmessage} type="text" placeholder="tweet here" />    
                </div>
                <input type="text" onChange={(e)=>settweetimageurl(e.target.value)} value={tweetimageurl} placeholder="Optional : img url here" className="tweetBox__input" />  
                <Button onClick={sumbitdata}  type ="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}
export default TweetBox