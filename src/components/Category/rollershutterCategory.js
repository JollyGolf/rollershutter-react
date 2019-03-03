import React from 'react';
import Gallery from './../Gallery/Gallery.js';
import Text from './../GeneralPage/Text.js';

const title = "Показаны фотографии категории Рулонные шторы";
const description = "Рулонные  шторы – это один из самых практичных и простых способов оформления окна. Как понятно из названия, рулонные шторы представляют собой гладкое полотно ткани, которое сворачивается в рулон с помощью специального механизма. Рулонные шторы, или тканевые роллеты, очень удобны в применении и практичны. Они смотрятся более изысканно, чем жалюзи, состоят из цельного полотна и, в отличие от массивных портьер, занимают меньше места.";

const RollerShutterCategory = ({content}) => (
  <div className="RollerShutterCategory">
    <Text text={title} type="title"/>
    <Gallery content={content} />
    <br />
    <Text text={description} type="description"/>
  </div>
)

export default RollerShutterCategory;