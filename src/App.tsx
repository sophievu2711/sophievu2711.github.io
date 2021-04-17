import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Profile from './components/Profile/Profile';
import TheBody from './common/layout/Body';
import MySkills from './components/MySkills/MySkills';
import Projects from './components/Projects/Projects';

function App() {
  const Pages = [
    <Profile />,
  ];
  return (
    <React.Fragment>
      <TheBody>
        <Banner />
        <Profile />
        {/* <MySkills /> */}
        {/* <Projects /> */}
      </TheBody>
    </React.Fragment>
  );
}

export default App;
