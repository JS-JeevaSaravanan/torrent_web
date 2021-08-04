
import Button from '@material-ui/core/Button';


const DownloadHistory = () => {

    return (
        <>  
        <div style ={{ left: "25%", width:"72%", position: "absolute" , backgroundColor: '#fbf4cd', color:'black'}}>
                <br></br>
                <div >           
                <Button 
                className = "button-container"
                variant="contained"
                style={{ left:'20px', backgroundImage: "linear-gradient(0deg, #fece00 0%, #ffe172 100%)", width:'95%' }}
                >
                Download History
            </Button>
            </div>
      <br></br>
        <div >

      
        <div class="row"  >
<div class="column" style={{ marginLeft:'10px' , width:"95"}} >
<div class="card"  style={{ marginLeft:'10px'  }} >
<h3 style={{ marginLeft:'5%'  }}  > The Shawshank Redemption  </h3>

<pre>  File Name        : ShawshankRedemption</pre>
<pre>  File Type        : mp4</pre>
<pre>  File Size        : 990MB</pre>
<pre>  File Location    : C:\Users\JeevaS\Downloads\ShawshankRedemption.mp4</pre>

<img style = {{ position:'absolute', marginLeft:'60%', top:'20px' }} src="https://www.filmsite.org/posters/shawshankredemption.jpg" height="200" width="300"></img>
<br></br>
</div>

</div>

<div class="column" style={{ marginLeft:'10px' , width:"95"}} >
<div class="card"  style={{ marginLeft:'10px'  }} >
<h3 style={{ marginLeft:'5%'  }}  > Inception </h3>

<pre>  File Name        : DownloadIncpetion</pre>
<pre>  File Type        : mkv</pre>
<pre>  File Size        : 1.68GB</pre>
<pre>  File Location    : C:\Users\JeevaS\Downloads\DownloadInception.mkv</pre>      

<img style = {{ position:'absolute', marginLeft:'60%', top:'20px' }} src="https://live.staticflickr.com/4006/4710319343_21dec8c1cf_b.jpg" height="200" width="300"></img>
<br></br>
</div>

</div>


<div class="column" style={{ marginLeft:'10px' , width:"95"}} >
<div class="card"  style={{ marginLeft:'10px'  }} >
<h4 style={{ marginLeft:'5%', top:'20px' }}  > Be Free song Vidhya Vox </h4>

<pre>  File Name        : BeFree</pre>
<pre>  File Type        : mp3</pre>
<pre>  File Size        : 201KB</pre>
<pre>  File Location    : C:\Users\JeevaS\Downloads\BeFree.mp3</pre>      

<img style = {{ position:'absolute', marginLeft:'62%', top:'20px' }} src="https://i1.sndcdn.com/artworks-000238347429-ervzx3-t500x500.jpg" height="200" width="300"></img>
<br></br>
</div>

</div>


</div>
        </div>
        </div>
        </>
    );
}

export default DownloadHistory;