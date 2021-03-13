import Avatar from '@material-ui/core/Avatar'
import './Post.css'
import VertifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Divider from '@material-ui/core/Divider'

const Post=({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) => {
    return (
        <div className="post" >
        <div className="post__avatar">
          <Avatar src="https://media.giphy.com/media/pUDdiByLQZ3MSeYuvN/giphy.gif" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                cool dev{" "}
                <span className="post__headerSpecial">
                  <VertifiedUserIcon className="post__badge" />
                  cool dev
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>this is women days special</p>
            </div>
          </div>
          <img src="https://media.giphy.com/media/pUDdiByLQZ3MSeYuvN/giphy.gif" alt="" />
          ,<Divider />
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
}

export default Post
