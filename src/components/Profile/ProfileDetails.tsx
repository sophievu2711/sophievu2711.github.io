import React from 'react';
import { TableContainer, Table, TableRow, TableCell } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  row: {
    fontWeight: 'normal',
    fontFamily: 'Caveat',
    fontSize: '2vw',
    marginTop: '2vh',
    '&:hover': {
      background: "linear-gradient(90deg, rgba(38,64,80,1) 30%, rgba(111,33,93,1) 100%);",
    }
  },
  col: {
    fontSize: '2.5vh',
    [theme.breakpoints.down('md')]:{
      fontSize: '2vh',
    }
  }
}));
const ProfileDetails: React.FC = () => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table>
        <TableRow className={classes.row}>
          <TableCell className={classes.col} style={{ fontWeight: 600, border: 'none' }}>Full name:</TableCell>
          <TableCell className={classes.col} style={{ border: 'none' }}>Thi Thuy Nga Vu</TableCell>
        </TableRow>
        <TableRow className={classes.row}>
          <TableCell className={classes.col} style={{ fontWeight: 600, border: 'none' }}>Other name:</TableCell>
          <TableCell className={classes.col} style={{ border: 'none' }}>Sophie</TableCell>
        </TableRow>
        <TableRow className={classes.row}>
          <TableCell className={classes.col} style={{ fontWeight: 600, border: 'none' }}>Languages:</TableCell>
          <TableCell className={classes.col} style={{ border: 'none' }}>Vietnamese, English, French</TableCell>
        </TableRow>
        <TableRow className={classes.row}>
          <TableCell className={classes.col} style={{ fontWeight: 600, border: 'none' }}>Email:</TableCell>
          <TableCell className={classes.col} style={{ border: 'none' }}>
            <div>svu2711@gmail.com</div>
          </TableCell>
        </TableRow>
        <TableRow className={classes.row}>
          <TableCell className={classes.col} style={{ fontWeight: 600, border: 'none' }}>Social Network:</TableCell>
          <TableCell className={classes.col} style={{ border: 'none' }}>
            {
              ["https://www.linkedin.com/in/sophie-vu/","https://github.com/sophievu2711/","https://www.behance.net/ngav3", "https://www.youtube.com/channel/UCemDzdLa_PQIOnAes21XjBg" ].map(
                social => <SocialIcon target="_blank" url={social} style={{margin: 3, height: 30, width: 30}} />
              )
            }
          </TableCell>
        </TableRow>
      </Table>      
    </TableContainer>
  );
};

export default ProfileDetails;