import React, { Component, Fragment } from 'react';
import Header from './Header.js';
import Field from './Field.js';
import Contacts from './Contacts.js';
import Footer from './Footer.js';

class Page extends Component {
  constructor(props){
    super(props);
    this.state = {
      type: "mainType",
      content: "Default"
    }
  }
  getTypeContent = (type, content) => {
    this.setState({type: type, content: content});
  }
  render() {
    return (
      <Fragment>
        <Contacts />
        <div className="Page">
      	  <Header getTypeContent={this.getTypeContent}/>
      	  <Field type={this.state.type} content={this.state.content}/>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Page;
