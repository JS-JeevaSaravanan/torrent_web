
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import CircularProgressWithLabel from './CircularProgressWithLabel'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PauseIcon from '@material-ui/icons/Pause';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';




import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

import LinearProgressWithLabel from './LinearWithValueLabel';

import React, { useState, useEffect } from 'react';


const useStyles = makeStyles({
  root: {
    // left: '55px',
    minWidth: '20%',
  },
  colorPrimary: {
    background: 'green'
  },
  button:{
    // backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)"
  }
});

const ImgMediaCard = (props) =>  {
  const classes = useStyles();
  // console.log(props.torrentImg)
  const imageUrl = props.torrentImg;
  const movieName = props.torrentName;
  const movieDescription = props.torrentDescription;
  const [progress, setProgress] = useState(0);

  
  // const progressingBar = () => <CircularProgress id="progressLoading" value={ progress } />;

  const [show, changeShow] = useState(true)

  const deleteClick = () => {
    changeShow(false);
  };


  const startDownload = () => {
  
    console.log("starting download")

    return;

    return (<CircularProgressWithLabel/>)


  const WebTorrent = require('webtorrent-hybrid');
  
  let torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent';
  const client = new WebTorrent()
  let progressValue = 0;
  client.add(torrentId, torrent => {
      const files = torrent.files;

      const output = document.getElementById("output")
      
      // files.appendTo(output)

      let length = files.length
      console.log('Number of files : '+length);
      const interval = setInterval(() => {
        progressValue = torrent.progress*100;
        // const progressBarDom = document.getElementById('progressLoading')
        // if(progressBarDom){
        //   progressBarDom.innerText = progressValue;
        // }
        // setProgress(progressValue)
        // return (<CircularProgress value={ progressValue* 100} />)
      }, 1000);
  })

  // return (progressingBar);

  return ( <CircularProgress id="progressLoading" value={ 20 } />);
}

  const getActionButtons = () => {
    return (
      <>
            <h2> { movieName }</h2>
            <p> { movieDescription } </p> 
            <LinearProgressWithLabel/>
            <br></br>

            <Button href="#text-buttons" color="primary" >
  More Info
</Button>

<Button
                variant="contained"
                className={classes.button}
                startIcon={<DirectionsRunIcon />}
                style = {{ left:"3%" ,backgroundImage: "linear-gradient(0deg, #fece00 0%, #ffe172 100%)"}}

            >
                Downloading
            </Button>

            
            <Button
                variant="contained"
                className={classes.button}
                startIcon={ <FavoriteIcon />}
                style = {{ left:"6%", backgroundColor: '#fbf4cd', color:'black'}}
            >
               Favorite
            </Button>

            <Button
                variant="contained"
                className={classes.button}
                startIcon={<PauseIcon size = 'large' />}
                style = {{ left:"9%", backgroundColor: '#fbf4cd', color:'black'}}
            >
                Pause
            </Button>


            <Button
                variant="contained"
                color="primary"
                // size="small"
                // className={classes.button}
                startIcon={<SaveIcon />}
                style = {{ left:"12%", backgroundColor: '#fbf4cd', color:'black'}}
            >
                Save
            </Button>
            
    <Button
                variant="contained"
                className={classes.button}
                startIcon={<DeleteIcon color = 'action'  />}
                style = {{ left:"15%" ,  backgroundColor: '#fbf4cd'}}
                onClick = {deleteClick}
            >
                Delete
            </Button>

      </>
    );
  }

  return (

    <div style = {{ left: props.left, display: show ? "block" : "none" ,width: '95%'}} >
    <br></br>

    <div id="output">
    {/* <a hre
    x="dummyPage.html">Redirect to Html page</a> */}
    </div>
    
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt= { movieName }
          height="100"
          image = { imageUrl }
          title={ movieName }
        />
        { startDownload() }
        
        <CardContent>
        <span style= {{ display: 'inline', height:'50%' }} >
          
          { getActionButtons () }
  
        </span>
        
        
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica ijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjo      asdflllllllllllllllllllllllllllll
          </Typography> */}

          
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>

    </div>
  );
}
export default ImgMediaCard;