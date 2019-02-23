import React, { Component } from 'react';
import Slider from './../GeneralPage/Slider.js';
import Text from './../GeneralPage/Text.js';

const text1 = "Осуществляется морфологический анализ введённого текста, демонстрируются несколько форм спряжения и акцентный контур слов изменяемых частей речи (глаголов, предикативных и полупредикативных прилагательных), встречающихся в тексте. После анализа происходит классификация по частям речи, слова каждой части речи выделяются особым цветом.";
const text2 = "После анализа происходит классификация по частям речи, слова каждой части речи выделяются особым цветом.";

class MainField extends Component {
  render() {
    return (
      <div className="Field mainField" type={this.props.type}>
      	<Text text={text1}/>
        <Slider />
        <Text text={text1}/>
        <Text text={text2}/>
      </div>
    );
  }
}

export default MainField;
