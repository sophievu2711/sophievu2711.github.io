import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TopNav from '../../components/TopNav';

const TheHeader: React.FC = (props) => {
  const a = 10;
  return (
    <AppBar>
      <TopNav />
    </AppBar>
  );
};

export default TheHeader;