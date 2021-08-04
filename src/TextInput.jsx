import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    //   width: '50ch',
    width: '60%'
    },
  },
}));

export default function TextInput(props) {
  
    // console.log(props);
  
  const classes = useStyles();

  return (
    <form  noValidate autoComplete="off">
    <span className={classes.root} >
      <TextField id="standard-basic" label="Enter your Favourite vedio's Magnetic Link" />
      </span>
      <Button 
                className = "button-container"
                variant="contained"
                color="primary"
                style={{ marginBottom: '-50px' }}
                // onClick = {props.clickFunc} 
                >
                Start Download
            </Button>
    </form>
  );
}
