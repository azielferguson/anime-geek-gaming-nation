import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Content } from './layouts/Content';
import { SideMenu } from './components/SideMenu';

function App() {
  return (
      <div className="App">
        <Router>
          <SideMenu />
          <Content />
        </Router>
      </div>
  );
}

export default App;
