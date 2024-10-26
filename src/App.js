import React from 'react';
import './App.css';
import NavBar from './features/components/navBar/navBar';
import Post from './features/components/singlePost/singlePost';
import SubReddit from './features/components/subReddit/subReddit';
import MobileSubReddit from './features/components/mobileSubReddit/mobileSubreddit';


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