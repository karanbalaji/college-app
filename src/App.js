import React, { Component } from 'react';
import UserCard from './components/card';
import ProfileCard from './components/card/ProfileCard';
import Fade from 'react-reveal/Fade';




class App extends Component {
  render() {
    return (
      <div>
      <Fade>
      <UserCard/>
      </Fade>
      
      </div>
    );
  }
}

export default App;
