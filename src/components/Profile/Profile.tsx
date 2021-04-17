import VizSensor from "react-visibility-sensor";

import React from 'react';
import { Grid, Hidden, Zoom, Grow } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import FavoriteIcon from '@material-ui/icons/Favorite';

import "../../style/Body.css";

import Avatar from '../../assets/profile3.png';

// import SidePagination from '.././SidePagination';
import SimpleModal from '../../common/SimpleModal';
import ProfileDetails from './ProfileDetails';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0,0,0,0.3)',
  },
  introduction: {
    fontSize: '2vh',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Quicksand',
    color: 'LightGray',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.5vh',
    },
  },
  header1: {
    background: 'rgba(255,255,255,0.8)',
    color: '#000',
    fontWeight: 800,
    fontSize: '7vh', 
    fontFamily: 'Caveat',
    padding: '0 3vh 0 1vh',
    [theme.breakpoints.down('lg')]: {
      fontSize: '4vh',
    },
  },
  header2: {
    background: 'rgba(0,0,0,0.5)',
    color: 'lightgrey',
    fontWeight: 800,
    fontSize: '2vh',
    padding: '0 10vh 0 1vh',
    opacity: 0.8,
  },
}));

const Profile: React.FC = () => {
  const classes = useStyles();
  const [active, setActive] = React.useState(false);
  const handleActive = () => {
    setActive(true);
  };
  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000000" fill-opacity="0.3" d="M0,192L24,181.3C48,171,96,149,144,154.7C192,160,240,192,288,208C336,224,384,224,432,197.3C480,171,528,117,576,101.3C624,85,672,107,720,138.7C768,171,816,213,864,218.7C912,224,960,192,1008,181.3C1056,171,1104,181,1152,176C1200,171,1248,149,1296,133.3C1344,117,1392,107,1416,101.3L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
      </svg>
      <div className={classes.container} onScroll={handleActive}>
        <VizSensor onChange={handleActive} scrollCheck={true} scrollDelay={250}>
          <Grid container spacing={0} style={{ margin: '0 7vw' }}>
            <Zoom in={active} timeout={3000}>
              <Grid className={classes.introduction} item xs={12} md={5}>
                <div>
                  <span className={classes.header1}>High-adaptable and flexible</span>
                  <div><span className={classes.header2}>in cross-functional teams</span></div>
                  <p>
                    Hi! I'm Nga Vu (Sophie).
                  </p>
                  <p>
                    Graduated with Distinction from University of Wollongong (Australia) in 2020 with a degree in <span style={{ fontWeight: 'bold'}}>Bachelor of Business Information Systems</span>, 
                    I have trained knowledge and skills in both commerce and computer science areas to become a <span style={{ fontWeight: 'bold'}}>systems analyst</span>, 
                    who can deal with users at all levels to analyse business problems and provide technical solutions for them. 
                  </p>
                  <p>
                    Besides, having a strong passion with human-computer interaction design and software development, 
                    I also have spent more time and effort to learn and build skills in UI/UX design and programming to become a <div style={{ fontWeight: 'bold'}}>developer with the focus on frontend.</div>
                  </p>
                  <SimpleModal modalTitle="Vũ Thị Thúy Nga" buttonTitle="Contact Info" small buttonStartIcon={<FavoriteIcon />} backgroundColor="linear-gradient(90deg, rgba(38,64,80,1) 30%, rgba(111,33,93,1) 100%)" color="#fff" variant="outlined">
                    <div>
                      <ProfileDetails />
                    </div>
                  </SimpleModal>
                </div>
              </Grid>
            </Zoom>
            <Hidden smDown>
              <Grow in={active} timeout={3000}>
                <Grid item xs={12} md={7}>
                  <img src={Avatar} width="100%" alt="avatar"/>
                </Grid>
              </Grow>
            </Hidden>
          </Grid>
        </VizSensor>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000000" fill-opacity="0.3" d="M0,192L24,181.3C48,171,96,149,144,154.7C192,160,240,192,288,208C336,224,384,224,432,197.3C480,171,528,117,576,101.3C624,85,672,107,720,138.7C768,171,816,213,864,218.7C912,224,960,192,1008,181.3C1056,171,1104,181,1152,176C1200,171,1248,149,1296,133.3C1344,117,1392,107,1416,101.3L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
      </svg>
      {/* <SidePagination /> */}
    </React.Fragment>
  );
};

export default Profile;