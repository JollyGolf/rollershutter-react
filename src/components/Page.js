import React, { Component, Fragment } from 'react';
import Header from './Header.js';
import Field from './Field.js';
import Footer from './Footer.js';
import Contacts from './Contacts.js';

class Page extends Component {
  render() {
    return (
      <Fragment>
        <Contacts />
        <div className="Page">
      	  <Header />
      	  <Field />
      	  <hr />
      	  <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Page;
