
import Avatar from '@material-ui/core/Avatar'
import {forwardRef} from "react"
import db from './firebase'
import './Post.css'
import VertifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
// import Divider from '@material-ui/core/Divider'

const Post=forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
    id_post
    },ref) => {
      const delete_doc=(id)=>{
        db.collection("posts").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
          }).catch((error) => {
         console.error("Error removing document: ", error);
        });}    
        console.log("this is id",id_post)
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
            
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VertifiedUserIcon className="post__badge" />}
                  {username}
                  <DeleteIcon onClick={()=>delete_doc(id_post)} className = "deletebutton" />
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          
          <div className="post__footer">
            <ThumbUpAltIcon />  
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    )
})

export default Post
