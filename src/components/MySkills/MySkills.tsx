import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import ai from '../../assets/skills/ai.png';
import bootstrap from '../../assets/skills/bootstrap.png';
import css from '../../assets/skills/css.webp';
import es6 from '../../assets/skills/es6.png';
import figma from '../../assets/skills/figma.png';
import git from '../../assets/skills/Git.png';
import graphql from '../../assets/skills/GraphQL.png';
import html from '../../assets/skills/html.png';
import java from '../../assets/skills/java.png';
import matui from '../../assets/skills/matui.png';
import mysql from '../../assets/skills/MySQL.png';
import photoshop from '../../assets/skills/photoshop.png';
import php from '../../assets/skills/php.svg';
import premiere from '../../assets/skills/premiere.png';
import reactlogo from '../../assets/skills/reactlogo.svg';
import typescriptlogo from '../../assets/skills/ts.png';
import xd from '../../assets/skills/xd.png';

const MySkills: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
      height: '100vh',  
      width: '99vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    visualDesign: {
    },
    backend: {
    },
    frontend: {
    },
    element: {
      margin: '2vh 2vh',
      // background: 'rgba(255,255,255,1)',
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.frontend}>
          <img className={classes.element} src={matui} alt="matui" height="60vh" />
          <img className={classes.element} src={typescriptlogo} alt="ts" height="40vh" />
          <img className={classes.element} src={reactlogo} alt="react" height="60vh" />
          <img className={classes.element} src={bootstrap} alt="bootstrap" height="40vh" />
          <img className={classes.element} src={html} alt="html" height="50vh" />
          <img className={classes.element} src={css} alt="css" height="50vh" />
        </div>
        <div className={classes.backend}>
          <img className={classes.element} src={es6} alt="es6" height="40vh" />
          <img className={classes.element} src={java} alt="java" height="60vh" />
          <img className={classes.element} src={php} alt="php" height="40vh" />
          <img className={classes.element} src={graphql} alt="graphql" height="50vh" />
          <img className={classes.element} src={mysql} alt="mysql" height="50vh" />
          <img className={classes.element} src={git} alt="git" height="50vh" />
        </div>
        <div className={classes.visualDesign}>
          <img className={classes.element} src={ai} alt="ai" width="50vh" />
          <img className={classes.element} src={photoshop} alt="photoshop" width="50vh" />
          <img className={classes.element} src={figma} alt="figma" height="40vh" />
          <img className={classes.element} src={xd} alt="xd" width="50vh" />
          <img className={classes.element} src={premiere} alt="premiere" width="50vh" />
        </div>
      </div>
    </div>
  );
};

export default MySkills;