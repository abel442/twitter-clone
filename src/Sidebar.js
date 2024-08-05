 import React from "react";
 
  import TwitterIcon from '@mui/icons-material/Twitter';
  import  SidebarOption from "./SidebarOption";
  import homeicon from '@mui/icons-material/Home';
  import searchicon from '@mui/icons-material/Search';
// import NotificationsNoneIcon  from "@mui/icons-material/NotificationsNone;
 import MailOutlineIcon from '@mui/icons-material/MailOutline';
 import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
 import ListAltIcon from '@mui/icons-material/ListAlt';
 import PermIdentityIcon from '@mui/icons-material/PermIdentity';
 import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
 function  Sidebar() {
   return (
    <div className="Sidebar">
  
   <TwitterIcon/>

   <SidebarOption Icon={homeicon} text="home" />
    <SidebarOption Icon={searchicon} text="explore" />
   <SidebarOption Icon={MailOutlineIcon} text="Messages" />
   <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
   <SidebarOption Icon={ListAltIcon} text= "Lists"/>
   <SidebarOption Icon={PermIdentityIcon} text="profile" />
   <SidebarOption Icon={MoreHorizIcon} text="more" />
  

    {/* <SidebarOption Icon={NotificationsNoneicon} text="Notifications"/>  */}
   {/* <SidebarOption/> */}

  {   /* twitter icon */}


   
   
  { /* sidebaroption */} 
   {  /*  sidebaroption */}
    

    {  /* Button -> tweet  */}
 
</div>
   );    
 }
export default Sidebar;