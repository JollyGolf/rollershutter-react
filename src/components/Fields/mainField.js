import React, { Component } from 'react';

class MainField extends Component {
  render() {
    return (
      <div className="Field" type={this.props.type}>
      	Главная страница твоего сайта! Сам потом скажешь, что мне сюда написать и что добавить.<br />
      	тут что-то будет<br />
      </div>
    );
  }
}

export default MainField;
