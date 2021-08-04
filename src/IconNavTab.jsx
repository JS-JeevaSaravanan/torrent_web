import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import FolderIcon from '@material-ui/icons/Folder';
import GetAppIcon from '@material-ui/icons/GetApp';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EventIcon from '@material-ui/icons/Event';
import TitleIcon from '@material-ui/icons/Title';
import StorageIcon from '@material-ui/icons/Storage';
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
}));

const getFavs = (items = [
  "One Flew Over the Cuckoo's Nest ",
  ' The Lion King ','Avengers: Infinity War ',
  'Terminator 2: Judgment Day ',
  'The Lord of the Rings: The Return of the King',
  " Monty Python's Life of Brian "]) => {

  const getThings = () => {
    
    return (items.map(
      (item)=>
      <>
      <TableContainer >
      
      <TableCell style={{ fontSize: '18px', width: '80%'}}> { item } </TableCell>
      <TableCell>   <EventIcon /> </TableCell>
      <TableCell>   <FavoriteIcon /> </TableCell>
      <TableCell>   <FileCopyIcon /></TableCell>
      <TableCell>   <GetAppIcon /> </TableCell>
      <TableCell>   <ViewStreamIcon /> </TableCell>
  
      </TableContainer>
      </>
      )
    )

  }
  return(
    <div >
    { getThings() }
    </div>
      )

  }

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style = {{ left: "25%", width:"70%", position: "absolute", top:"5%" }}>
      <AppBar position="static" style = {{ color:'black',backgroundImage: "linear-gradient(0deg, #fece00 0%, #ffe172 100%)"}}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab icon={<VideoLibraryIcon />}  label="Vedios" href="/drafts" {...a11yProps(0)} />
          <LinkTab icon={<LibraryMusicIcon />} label="Musics" href="/trash" {...a11yProps(1)} />
          <LinkTab icon = {<LibraryBooksIcon />}label="Books" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{ backgroundColor: '#fbf4cd' }}>

        {getFavs()}

    <br></br>
    <div style={{backgroundImage: "linear-gradient(0deg, #fece00 0%, #ffe172 100%)"}}>
    
    <div style = {{ clear:'both'}}>
    {/* <h5 style = {{ float:'left'}} > <TitleIcon /> Saved Title </h5> */}
    <h5 style = {{ float:'left', marginLeft:'15px'}} > <EventIcon /> Saved History</h5>
    <h5 style = {{ float:'left', marginLeft:'15px'}} > <FavoriteIcon /> Remove from favorite </h5>
    <h5 style = {{ float:'left', marginLeft:'15px'}} > <FileCopyIcon /> Copy Magnetic Link </h5>
    <h5 style = {{ float:'left', marginLeft:'15px'}} > <GetAppIcon /> Start Downloading File </h5>
    <h5 style = {{ float:'left', marginLeft:'15px'}} ><ViewStreamIcon /> Start Streaming File</h5>
    <br/>    
    <br/>    
    <br/>    
    </div>

    </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
    </div>
  );
}
