import {
  AppBar, Hidden, Tabs, Tab, Toolbar, Box,
} from '@material-ui/core';
import {
  makeStyles, createStyles, Theme, withStyles,
} from '@material-ui/core/styles';
// import { Link, useLocation } from "react-router-dom";

import React from 'react';

const useStyles = makeStyles((theme: Theme) => createStyles({
  nav: {
    backgroundColor: 'rgba(255, 255, 255, 255)',
    color: "black",
    flexDirection: "row",
    flexWrap: "wrap",
    boxShadow: "none",
  },
  logo: {
    padding: "3vh 5vh",
    [theme.breakpoints.down("md")]: {
      padding: "3vh 1vh",
    }
  }
}));
interface StyledTabsProps {
  value: number;
}
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1, 
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#F1C833',
    },
  },
})((props: StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
const routes: any[] = [{name: "Home"}, {name: "Our Product"}, {name: "About us"}]

const TopNav: React.FC = () => {
  const classes = useStyles(undefined);
  // const idx = routes.findIndex(route => route.to === location.pathname);
  return (
    <AppBar position="sticky" className={classes.nav}>
      <Toolbar style={{ width: "100%" }}>
        {/* <Link to="/" className={classes.logo}> */}
          <img width="100" src="logo.png" alt="logo" />
        {/* </Link> */}
        {/* <StyledTabs value={idx}> */}
          {routes.map(route => (
            // <Link to={route.to} style={{color: "inherit", textDecoration: "none" }} key={route.to}>
              <Tab style={{ fontSize: "1.2rem", textTransform: "capitalize" }} label={route.name}/>
            // </Link>
          ))}
        {/* </StyledTabs> */}
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
