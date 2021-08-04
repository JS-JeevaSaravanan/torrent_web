import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import Button from '@material-ui/core/Button';



const Settings  = () => {

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      function ValueLabelComponent(props) {
        const { children, open, value } = props;
      
        return (
          <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
          </Tooltip>
        );
      }

      
    return (
    <div style = {{  left: "25%", width:"70%", position: "absolute", top:"5%", color:'black', backgroundColor: '#fbf4cd'}} >

    <div>

        <>

        <Button 
                className = "button-container"
                variant="contained"
                style={{  backgroundImage: "linear-gradient(0deg, #fece00 0%, #ffe172 100%)", width:'100%' }}
                >
                Download Service
            </Button>

            <List>

        <ListItem>
        <h4>
        Automatic Download when streaming
        </h4>
        <div style = {{ left: "80%", position: "absolute", color:'black'}}>
         <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        
        </div>

</ListItem>
<br/>
<ListItem>
   <h4>Threads on Download </h4>
        
        <div style = {{ left: "75%", position: "absolute", color:'black'}}>
  <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
    <FormControlLabel value="one" control={<Radio color = 'primary' />} label="One thread at a time" />
    <FormControlLabel value="two" control={<Radio color = 'primary' />} label="Two thread at a time" />
    <FormControlLabel value="three" control={<Radio color = 'primary' />} label="Three thread at a time" />
  </RadioGroup>
  </div>
  
</ListItem>

<br/>
</List>

<Button 
                className = "button-container"
                variant="contained"
                style={{  backgroundImage: "linear-gradient(0deg, #fece00 0%, #ffe172 100%)", width:'100%' }}
                >
                Stream Service
            </Button>


<List>
        <ListItem>
     
        <h4>Enable automatic Streaming when downloading</h4>

        <div style = {{ left: "80%", position: "absolute", color:'black'}}>
  
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        </div>

        </ListItem>
<br/>
<br/>
        <ListItem>
        <h4>
        Streaming Quality
        </h4>

        
        <div style = {{ left: "75%", position: "absolute", color:'black'}}>
  
  <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
  <FormControlLabel value="four" control={<Radio color = 'primary' />} label="Automatic" />
    <FormControlLabel value="one" control={<Radio color = 'primary' />} label="Low Quality" />
    <FormControlLabel value="two" control={<Radio color = 'primary' />} label="Medium Quality" />
    <FormControlLabel value="three" control={<Radio color = 'primary' />} label="High Quality" />
  </RadioGroup>
        </div>

</ListItem>
<br/>
<br/>

</List>


<Button 
                className = "button-container"
                variant="contained"
                style={{  backgroundImage: "linear-gradient(0deg, #fece00 0%, #ffe172 100%)", width:'100%' }}
                >
                Favorite Service
            </Button>


<List>
        <ListItem>

        <h4>Show Faved History Option </h4>
        

        <div style = {{ left: "80%", position: "absolute", color:'black'}}>
        
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />

      </div>

</ListItem>

<ListItem>

<h4>Show Copy Magnetic Link Option </h4>
      
        

<div style = {{ left: "80%", position: "absolute", color:'black'}}>
        
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />

      </div>

</ListItem>

<ListItem>

      <h4>Show Instant Downloading Option</h4>
        

      <div style = {{ left: "80%", position: "absolute", color:'black'}}>
        
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />

      </div>
</ListItem>

<ListItem>
      <h4>Show Instant Streaming Option</h4>



      <div style = {{ left: "80%", position: "absolute", color:'black'}}>
        
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />

      </div>

</ListItem>
</List>

        </>
</div>
    </div>
    );
}


export default Settings;
