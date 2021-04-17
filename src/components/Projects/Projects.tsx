import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import TheBody from '../../common/layout/Body';

// import giphy from '../../assets/portfolio/adjust.png';
// import slickgoose from '../../assets/portfolio/sg.png';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Projects: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      a
    </div>
  );
};

export default Projects;