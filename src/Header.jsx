

//import useState hook to create menu collapse state
import React, { useState, useEffect } from 'react';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import AttachmentIcon from '@material-ui/icons/Attachment';

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = (props) => {

  const [activeManger, changeActiveManger ] = useState([true,false,false,false,false]);

  const makeActive0  = () => {
    changeActiveManger([true,false,false,false,false])
  };
  
  const makeActive1  = () => {
    changeActiveManger([false,true,false,false,false,false])
  };
  
  const makeActive2  = () => {
    changeActiveManger([false,false,true,false,false,false])
  };
  
  const makeActive3  = () => {
    changeActiveManger([false,false,false,true,false,false])
  };

  
  const makeActive4  = () => {
    changeActiveManger([false,false,false,false,true,false])
  };

  
  const makeActive5  = () => {
    changeActiveManger([false,false,false,false,false,true])
  };


  return (
    <>
      <div id="header" style = {{ width: '18%', height: '100vh'}}>
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={props.collapse}  >
          <SidebarHeader >
          <div className="logotext">
          <br></br>
              
              { props.collapse 
              ? <p style = {{ marginLeft: '-15px' }}> <img src="https://play-lh.googleusercontent.com/MOF_DggLBpZm2vLjUCb_4F-dW8szpf0EvORBKhJqFMcKD9WymtdUxAiuJGYbc1_fYA" width="60" height="50" /> </p>
              : <p style ={{ display:'inline'}}>
                  <span style = {{ marginLeft: '-10px' }}> <img src="https://www.seekpng.com/png/detail/82-822775_torrent-power-limited-surat.png" width="90%" height="60" /> </span> 
                </p>
              }
            </div>
            {/* <div className="closemenu" onClick={props.onClick}>
              {props.collapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div> */}
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FiHome  />} active = { activeManger[0] } onClick = { makeActive0 }> Home </MenuItem>
              <MenuItem icon={<FaList />} active = { activeManger[1] } onClick = { makeActive1 } > Downloads </MenuItem>
              <MenuItem icon={<FaRegHeart />} active = { activeManger[2] } onClick = { makeActive2 } >Favourites </MenuItem>
              <MenuItem icon={<RiPencilLine />} active = { activeManger[3] } onClick = { makeActive3 } >Profile</MenuItem>
              <MenuItem icon={<BiCog />} active = { activeManger[4] } onClick = { makeActive4 } >Settings</MenuItem>
              <MenuItem icon={<AttachmentIcon />} active = { activeManger[5] } onClick = { makeActive5 } >Magnetic Links</MenuItem>

            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;