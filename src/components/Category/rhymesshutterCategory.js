import React, { Component } from 'react';
import Gallery from './../Gallery/Gallery.js';
import Text from './../GeneralPage/Text.js';

const title = "Показаны фотографии категории Римские шторы";
const description = "Римские шторы завоевали одну из лидирующих позиций среди всех возможных типов штор благодаря своей простоте, изящности и функциональности. Они мягко рассеивают дневной свет, поступающий в комнату: проходя сквозь ткань он приобретает оттенок того или иного цвета. Этими шторами можно украсить любую комнату — спальню, детскую комнату, кухню и другие помещения с окнами в доме, а также, их довольно просто сделать своими руками.";

class RhymesShutterCategory extends Component {
  render() {
    return (
      <div className="RhymesShutterCategory">
        <Text text={title} type="title"/>
        <Gallery content={this.props.content} />
        <br />
        <Text text={description} type="description"/>
      </div>
    );
  }
}

export default RhymesShutterCategory;
