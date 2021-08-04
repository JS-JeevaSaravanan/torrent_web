
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import './MainBody.css';
import ImgMediaCard from './ImageMediaCard';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import circularProgress from '@material-ui/core'
import TextInput from './TextInput';
import CustomizedSnackbars  from './CustomizedSnakebars';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import AddBoxIcon from '@material-ui/icons/AddBox';


const useStyles = makeStyles({
    root: {
        '& > *': {
        //   margin: theme.spacing(1),
        //   width: '50ch',
        width: '60%'
        },
    },
    mainbody:{
        // backgroundColor: 'red',
        color:'red',
    },
    button: {
        left:'inherit',
    },
    inputbox:{
        widht: '20px'

    }
  });



const MainBody = (props) => {
    
    const [elms, incElms] = useState([])
    const [prog,incPrg] = useState([])
    
    const startDownload = () => {
        console.log('startDownload')

  
//   const [progress, setProgress] = useState(10);
  

//     useEffect(() => {
//     // Update the document title using the browser API
//     console.log("use effect");
//     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 5));
//         });


        const temp = [...elms];
        const leng = elms.length % 4;

        if( leng === 0){
            temp.push(['StarWars','https://wallpaperaccess.com/full/2564207.jpg',`The original trilogy is the first installment of films of the Star Wars saga to be produced. These were the movies released from 1977 to 1983. They primarily focus on the Rebel Alliance trying to free the galaxy from the clutches of the Galactic Empire, as well as Luke Skywalker's quest to become a Jedi and face Sith Lord Darth Vader.`])
        }else if(leng === 1){
            temp.push(['Thor','https://wallpaperaccess.com/full/645142.jpg',`Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. ... After reigniting a dormant war, Thor is banished from Asgard to Earth, stripped of his powers and his hammer Mjölnir. As his brother Loki plots to take the Asgardian throne, Thor must prove himself worthy.`])
        }else if(leng === 2){
            temp.push(['300 Spatans','https://wallpaperlists.files.wordpress.com/2014/03/the-300-rise-of-an-empire-wallpaper.jpg',`The plot revolves around King Leonidas (Gerard Butler), who leads 300 Spartans into battle against the Persian "God-King" Xerxes (Rodrigo Santoro) and his invading army of more than 300,000 soldiers. As the battle rages, Queen Gorgo (Lena Headey) attempts to rally support in Sparta for her husband.`])
        }else {
            temp.push(['SpiderMan','https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700481544.jpg',`When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family. Based on Marvel Comics' superhero character, this is a story of Peter Parker who is a nerdy high-schooler.`])
        }

        incElms(elms => [...temp] )
        console.log(elms)

    };

    const clickFunc = () => 
    {
        console.log('click');
        const torrentId = document.getElementById("standard-basic").value;
        document.getElementById("standard-basic").value = "";
        
        // if(!torrentId){
        //     alert("Enter magenetic line please")
        //     return ;
        // }
        startDownload();
    }


    const getImgCards = () => {

        if(elms.length === 0){
            return <img src="https://techposts.org/wp-content/uploads/2017/03/BEST-TORRENT-STREAMING-APPS-for-Android-iOS-Windows-Mac-and-Linux.jpg" width="95%" height="60%"/>
        }

        return(
            <div style ={{ width:"100%", position: "absolute"}}>
            { elms.map(ary => <><ImgMediaCard  torrentName = {ary[0]} torrentImg= {ary[1]} torrentDescription = { ary[2] } /></>)
             }
            </div>
            );

    }
    const classes = useStyles();

    return(
        <div style ={{ left: "25%", width:"70%", position: "absolute", top:"10%" }}>
        
     
            <div style={{ display:"inline"}}>

            {/* <TextInput /> */}

            {/* <TextField id="standard-basic" label="Enter your Magnetic Link" /> */}

            <form  noValidate autoComplete="off">
    <span className={classes.root} >
      <TextField  id="standard-basic" label="Enter your favorite movie's magnetic Link" style={{ width: '75%' }} />
      </span>

      {/* <AddBoxIcon /> */}

      <Button 
                className = "button-container"
                variant="contained"
                style={{ left:'20px',marginBottom: '-40px', backgroundImage: "linear-gradient(0deg, #fece00 0%, #ffe172 100%)" }}
                onClick = {clickFunc} 

                >
                Start Download
            </Button>
    </form>

    {/* <CustomizedSnackbars /> */}

            {/* <TextInput fn = {clickFunc()} /> */}

            {/* <TextField className = "text-container inputbox" id="standard-basic" label="Enter your Magnetic Link" style={{ left: props.left, width: '200px'}} /> */}
 
            {/* <Button 
                className = "button-container"
                variant="contained"
                color="primary"
                style={{ left: props.left }}
                onClick = {clickFunc} 
                >
                Start Download
            </Button> */}


        </div>

            <br></br>
        
        <div>
            <div id="cards" class="card-container" style={{ left: props.left, display:'flex',flexDirection: 'row', flexWrap:'wrap', justifyContent:'center,' }}>
                { getImgCards() }   
            </div>

        </div>
    </div>

    );
}

export default MainBody;

