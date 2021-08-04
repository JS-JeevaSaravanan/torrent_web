

import Header from './Header'

import MainBody from './MainBody';

import React, { useState, useEffect } from 'react';
import NavTabs from './NavTabs'
// import CircularProgressWithLable from './CircularProgressWithLabel'

import FixedContainer from './Container';
import { ReactVideo } from "reactjs-media";

import Account from './Account'
import SignIn from './SignIn'
// import SignInSide from './SignInSide'\
import DownloadHistory from './DownloadHistory'

import IconNavTab from './IconNavTab'

import Settings from './Settings'

function App() {

  const [progress, setProgress] = useState(10);
  

  const WebTorrent = require('webtorrent-hybrid');

  let torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent';
  const client = new WebTorrent()

  // client.add(torrentId, torrent => {
  //   const files = torrent.files
  //   let length = files.length
  //   console.log('Number of files : '+length);

  //   const interval = setInterval(() => {
  //     // console.log(client.downloadSpeed);
  //     setValue(value+10);
  //     console.log(value);
  //   }, 2000);

  // })

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log("use effect");
  //   setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 5));
  // });

  const doStream = () => {

    // return;
    var WebTorrent = require('webtorrent')

var client = new WebTorrent()

// Sintel, a free, Creative Commons movie
var torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'

client.add(torrentId, function (torrent) {
  // Torrents can contain many files. Let's use the .mp4 file
  var file = torrent.files.find(function (file) {
    return file.name.endsWith('.mp4')
  })

  // Display the file by adding it to the DOM.
  // Supports video, audio, image files, and more!
  file.appendTo('#Hello')
  document.getElementById("startButton").style.display = "none";
    
})
  }
  
  
  
  const [menuCollapse, setMenuCollapse] = useState(false)

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };


  return (
    <div className="App">
    {/* <SignIn /> */}


    <Header collapse = {menuCollapse} onClick = {menuIconClick}  style = {{ position: 'relative'}} />

    {/* <span style={{ left: menuCollapse? '200px': '300px' }}>
        <MainBody left = {menuCollapse? '200px': '300px'} />       
    </span> */}

    {/* <div style={{ height: '98vh', top:'0vh' , overflow: 'auto', position: 'relative', backgroundColor: '#fbf4cd'}}>
      <MainBody />
    </div> */}
    
    {/* <button  style = {{ position: 'absolute', right:"20%"}} id="startButton" onClick={doStream}>hi</button>
    <div id="Hello" style={{ zIndex: 1000, position: 'absolute', height: '50vh'}} ></div> */}


    {/* <div style={{ height: '98vh', top:'1vh' , overflow: 'auto', position: 'relative'}}>
      <DownloadHistory />
    </div> */}

    
    {/* <div style={{ height: '97vh', top:'1vh' , overflow: 'auto', position: 'relative' }}>
      <IconNavTab />
    </div> */}

        {/* <div style={{ height: '98vh', top:'1vh' , overflow: 'auto', position: 'relative'}}>
      <Account />
    </div> */}

    
    {/* <div style={{ height: '97vh', top:'1vh' , overflow: 'auto', position: 'relative' }}>
      <Settings />
    </div> */}

    
    <div style={{ height: '97vh', top:'1vh' , overflow: 'auto', position: 'relative' }}>
      <NavTabs />
    </div>



    </div>
  );
}

export default App;
