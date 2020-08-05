import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import classes from '*.module.css';

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