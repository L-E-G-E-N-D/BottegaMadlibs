import React, { Component } from 'react';
import Header from './header';
import Card from './card';

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header() }  
          <Card />
      </div>
    );
  }
}

// Things we need to fix:
// Generate Button Space / card-height
// Number Labels as Text Placeholders
export default Home;