import './Sidebar.css'


import SidebarOptions from './SidebarOptions'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Button from '@material-ui/core/Button'

const Sidebar = () => {
    return (
        <div className ="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />
            <SidebarOptions active Icon={HomeIcon} text="Home"/>
            <SidebarOptions Icon={SearchIcon} text="Explore"/>
            <SidebarOptions Icon={NotificationNoneIcon} text="Notification"/>
            <SidebarOptions Icon={MailOutlineIcon} text="Message"/>
            <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmark"/>
            <SidebarOptions Icon={ListAltIcon} text="List"/>
            <SidebarOptions Icon={PermIdentityIcon } text="Profile"/>
            <SidebarOptions Icon={MoreHorizIcon} text="More"/>

            <Button variant="outlined" className="sidebar__tweet" fullWidth> Tweet </Button>
            
        </div>
    )
}

export default Sidebar
