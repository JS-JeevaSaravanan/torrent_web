import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const streaming = () => {
    // let WebTorrent = require('webtorrent')
    // const torrentId = 'https://webtorrent.io/torrents/sintel.torrent'
    // const client = new WebTorrent()
    // client.add(torrentId, function (torrent) {

    //     // Torrents can contain many files. Let's use the .mp4 file
    //     const file = torrent.files.find(function (file) {
    //       return file.name.endsWith('.mp4')
    //     })

    //     // Stream the file in the browser
    //     file.appendTo('#output')

    //     // Trigger statistics refresh
    //     torrent.on('done', onDone)
    // })

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
  file.appendTo('stream-container')
})
}

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ backgroundColor: '#fbf4cd', height: '100vh'  }}>
        {/* <Typography component="div" style={{ backgroundColor: '#fbf4cd', height: '100vh'  }} /> */}
        <div id="stream-container"> justifyContent</div>
        Hellow worthy
        
      </Container>
    </React.Fragment>
  );
}