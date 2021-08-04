import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

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
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style = {{ left: "25%", width:"70%", position: "absolute", top:"5%" }}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          style = {{ backgroundImage: "linear-gradient(0deg, #fece00 0%, #ffe172 100%)", color:'black'}}
        >
          <LinkTab label="Pirate Bay" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="YTS" href="/trash" {...a11yProps(1)} />
          <LinkTab label="RARBG" href="/spam" {...a11yProps(2)} />
          <LinkTab label="1337x" href="/spam" {...a11yProps(3)} />
          <LinkTab label="Torrentz2" href="/spam" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{ backgroundColor: '#fbf4cd' }}>
            <h2>
                <LoyaltyIcon />
                The Pirate Bay — The Most Well-Established Torrent Site
                <a target="_blank" href="https://thepiratebay.org/index.html" style = {{ fontSize: '15px', marginLeft:'10px' }} >(Check out)</a>
            </h2>
            
            <img src = "https://www.vpnmentor.com/wp-content/uploads/2019/02/TPB-homepage-torrent-autoresized86X.png"></img>
            
            <div class="vm-block-highlight vm-block-highlight--list">
<ul>
<li><strong>Year founded:</strong> 2003</li>
<li><strong>Mirror sites/alternate URLs:</strong> thepiratebay.org, tpbpirateproxy.org, proxybay.xyz, thepirate-bay.org, thepiratebay10.org, thepiratebay.rocks, thepiratebay.vip, pirateproxy.id, ThePirateBay.red, Tbp.tw, TPBMirror.org</li>
<li><strong>Alexa ranking:</strong> 224</li>
<li><strong>Banned locations:</strong> United Kingdom, Spain, Singapore, Argentina, Netherlands, Malaysia, Australia, Austria, Norway, Finland, Sweden, China, Denmark, France, Iceland, Italy, India, Saudi Arabia, Indonesia, Iran, Ireland, Kuwait, Russia, Sri Lanka, Germany, Turkey, United Arab Emirates, and Belgium</li>
<li><strong>Instant download support:</strong> Yes</li>
</ul>
</div>
      </TabPanel>
      <TabPanel value={value} index={1} style={{ backgroundColor: '#fbf4cd' }} >
            <h2>
                <LoyaltyIcon />
                YTS — Best Torrent Site for High-Quality Movies
                <a target="_blank" href="https://yts.mx/" style = {{ fontSize: '15px', marginLeft:'10px' }} >(Check out)</a>
            </h2>
            <img src="https://www.vpnmentor.com/wp-content/uploads/2019/02/YTS-homepage-torrent-autoresized86X.png" />

            <div class="vm-block-highlight vm-block-highlight--list">
<ul>
<li><strong>Year founded:</strong> 2011</li>
<li><strong>Mirror sites/alternate URLs:</strong> yts.am, yts.gd, yts.pm, yts.gm, yts.unblocked.mx, yts.unblockit.app, ww.yts.vc, yts.lt</li>
<li><strong>Alexa ranking:</strong> 696</li>
<li><strong>Banned locations:</strong> Ireland</li>
<li><strong>Instant download support:</strong> Yes</li>
</ul>
</div>

      </TabPanel>
      <TabPanel value={value} index={2} style={{ backgroundColor: '#fbf4cd' }} >
            <h2>
                <LoyaltyIcon />
                RARBG — Verifies All Torrents to Ensure High Quality
                <a target="_blank" href="https://www.rarbg.is/index8.php" style = {{ fontSize: '15px', marginLeft:'10px' }} >(Check out)</a>
            </h2>
            <img src="https://www.vpnmentor.com/wp-content/uploads/2019/02/Rarbg-homepage-torrent-autoresized86X.png"></img>

            <div class="vm-block-highlight vm-block-highlight--list">
<ul>
<li><strong>Year founded:</strong> 2008</li>
<li><strong>Mirror sites/alternate URLs:</strong> 185.37.100.122, rarbg.is, rarbgprx.org/index70.php, rarbgunlock.com, rarbgunlock.com/index70.php, rarbgmirror.com, rarbgmirror.com/index70.php, rarbgmirror.xyz/index70.php, rarbgmirror.org/index70.php, rarbgaccess.org/index70.php</li>
<li><strong>Alexa ranking:</strong> 7,542</li>
<li><strong>Banned locations:</strong> The UK, Bulgaria, Portugal, Denmark, Morocco, Saudi Arabia, Pakistan, Indonesia, and Ireland</li>
<li><strong>Instant download support:</strong> Yes</li>
</ul>
</div>

      </TabPanel>
      <TabPanel value={value} index={3} style={{ backgroundColor: '#fbf4cd' }} >
            <h2>
                <LoyaltyIcon />
                1337x — Huge Torrent Library With Great Variety
                <a target="_blank" href="https://www.1377x.to/" style = {{ fontSize: '15px', marginLeft:'10px' }} >(Check out)</a>
            </h2>
            <img src="https://www.vpnmentor.com/wp-content/uploads/2019/02/1337x-homepage-torrent-autoresized86X.png"/>
            <div class="vm-block-highlight vm-block-highlight--list">
<ul>
<li><strong>Year founded:</strong> 2007</li>
<li><strong>Mirror sites/alternate URLs:</strong> 1337x.st, x1337x.se, 1337x.gd, 1337x.is, x1337x.ws, x1337x.eu.</li>
<li><strong>Alexa ranking:</strong> 257</li>
<li><strong>Banned locations:</strong> Australia, the UK, Austria, and Ireland</li>
<li><strong>Instant download support:</strong> Yes</li>
</ul>
</div>
      </TabPanel>

      <TabPanel value={value} index={4} style={{ backgroundColor: '#fbf4cd' }} >
            <h2>
                <LoyaltyIcon />
                Torrentz2 — Optimized Torrent Search Engine With a Focus on Music
                <a target="_blank" href="https://torrentzeu.org/" style = {{ fontSize: '15px', marginLeft:'10px' }} >(Check out)</a>
            </h2>
            <img src="https://www.vpnmentor.com/wp-content/uploads/2019/02/torrentz2-homepage-tottent-autoresized86X.png"/>
            
            <div class="vm-block-highlight vm-block-highlight--list">
<ul>
<li><strong>Year founded:</strong> 2016</li>
<li><strong>Mirror sites/alternate URLs:</strong> torrentz2.is, torrentz2.me, torrentz2eu.org, torrentz.eu, torrentzeu.org, torrenteu.org, torrentz2.cc, Torrentzwealmisr.onion</li>
<li><strong>Alexa ranking:</strong> 21,682</li>
<li><strong>Banned locations:</strong> None</li>
<li><strong>Instant download support:</strong> No</li>
</ul>
</div>
            
      </TabPanel>


    </div>
  );
}
