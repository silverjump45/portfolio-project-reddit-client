import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import Post from './components/post/post';
import SubReddit from './components/subReddit/subReddit';
import MobileSubReddit from './feature/components/mobileSubReddit/MobileSubReddit';


function App() {
  return (
    <div className="App">
      <NavBar />
        <div className='main-content'>
          <Post />
          <SubReddit />
          <MobileSubReddit />
        </div>
    </div>
  );
}

export default App;