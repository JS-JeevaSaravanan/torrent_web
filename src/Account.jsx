
import './Account.css'
import ImgProfileCard from './ImgProfileCard';
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import ListItem from '@material-ui/core/ListItem';
const Account = (props) => {

    return (
        <>
               <div style ={{ left: "25%", width:"70%", position: "absolute" , backgroundColor: '#fbf4cd', color:'black'}}>
                <br></br>
                
                <Button 
                className = "button-container"
                variant="contained"
                style={{ left:'20px', backgroundImage: "linear-gradient(0deg, #fece00 0%, #ffe172 100%)", width:'95%' }}
                >
                Your Profile
            </Button>


                <div style ={{ left: "55%", position: "relative", top:"70px", position:'absolute' }}>
               <img 
               height="400px"
               width="360px"
               src="https://cdna.artstation.com/p/assets/covers/images/012/283/212/large/shane-le-icon2.jpg?1533989738" />
                </div>

                
<h3 style={{ marginLeft:'5%'  }}  > The Shawshank Redemption (1994) </h3>

<pre>  Profile Name     : harrypotter123 </pre>
<pre>  Profile ID       : TorrentPower/NMGES12113</pre>
<pre>  Email ID         : harrypotter1990@gamil.com </pre>
<pre>  Phone  Number    : +44 (333) 011 0512</pre> 
<pre>  Date of Birth    : 20/07/1990 </pre>
<pre>  Country          : England</pre>
<pre>  Languages Known  : English </pre>
<pre>  Joined Date      : 26 Jan 2020</pre>
<pre>  Last Download    : 01 Aug 2021</pre>
<pre>  Download Counts  : 144 files</pre>
<pre>  Average File Size: 400MB </pre>
<pre>  Downloads Active : Weekly</pre>

<br></br>


               <div>

               </div>

               </div>
                   
                  
        </>
    );

}

export default Account;