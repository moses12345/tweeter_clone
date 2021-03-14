import './Widgets.css'
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed'
import SearchIcon  from '@material-ui/icons/Search'

const Widgets =()=>{
    return(
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="search Twitter" type="text"/>
            </div>
            <div className="widgets__widgetContainer">
               <h1>these areside tweet</h1>
            </div>
        </div>
      
        
        )

}
export default Widgets
