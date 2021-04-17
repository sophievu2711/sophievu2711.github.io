import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
// import TheBody from '../../common/layout/Body';

import giphy from '../../assets/portfolio/adjust.png';
import slickgoose from '../../assets/portfolio/sg.png';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: '10vh',
    fontFamily: 'Quicksand',
    fontSize: '2vh',
  },
  title: {
    fontFamily: 'Caveat',
    fontSize: '10vh',
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '56.25%',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
}));

const projects = [
  {
    name: "Finding Giphy",
    live_demo: "https://sophievu2711.github.io/finding-giphy",
    img: giphy,
    description: [
      "A Giphy search interface that allows you to search for GIFS and Stickers.",
      "Have fun with random results that the program gives you ! ",
    ],
  },
  {
    name: "Sunflower",
    live_demo: "https://test.slickgoose.tech/",
    video: "https://youtube.com/embed/LclpliE9mUk",
    description: [
      "A cross-platform web app that aims to provide less economically nations with a low-cost, lightweight and user-friendly solution for digital training and learning.",
      "Developed by SlickGoose - an agile team run by six students from Faculty of Engineering and Information Sciences at University of Wollongong.", 
    ],
  },
  {
    name: "Slick Goose",
    live_demo: "https://sophievu2711.github.io/slickgoose",
    img: slickgoose,
    description: [
      "Marketing website for Sunflower.",
      "An introduction to Developing Nations Dashboard project and SlickGoose team.",
    ],
  },
];

const Projects: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      {
        projects.map((project, index) => (
          <Grid
            container
            direction={index%2 ? "row-reverse" : "row"}
            className={classes.container}
            spacing={3}
            alignItems="center"
          >
            <Grid item sm={6} xs={12}>
              {
                project.img && <img src={project.img} alt={project.name} width="100%" />
              }
              {
                project.video && 
                <div className={classes.videoContainer}>
                  <iframe className={classes.video} src={project.video} title={project.name} frameBorder="0" />
                </div>
              }
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.title}>
                {project.name}
              </div>
              <div>
                {project.description.map((paragraph, index) => (
                  <p>{paragraph}</p>
                ))}
              </div>
              <div>
                <a href={project.live_demo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button style={{ color: "white" }}>Live Demo</Button>
                </a>
              </div>
            </Grid>
          </Grid>
        ))
      }
    </>
  );
};

export default Projects;