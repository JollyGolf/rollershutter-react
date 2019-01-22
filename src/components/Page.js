import React, { Component } from 'react';
import Header from './Header.js';
import Field from './Field.js';
import Footer from './Footer.js';

class Page extends Component {
  render() {
    return (
      <div className="Page">
      	<Header />
      	<hr />
      	<Field />
      	<hr />
      	<Footer />
      </div>
    );
  }
}

export default Page;
