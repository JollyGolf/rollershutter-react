import React from 'react';
import Slider from './../GeneralPage/Slider.js';
import Text from './../GeneralPage/Text.js';
import Description from './../Fields/descriptionField';

const description1 = "Жаллюзи, руллонные шторы, шторы Плиссе... На сегодняшний день это не просто ролеты, чтобы закрыть окна. Это настоящие картины для окон!";
const description2 = "Самые разнообразные цветовые решения, фактуры, с тиснением и совсем без. Можно обыграть таааак цвет, что помещение заиграет новыми красками и новой жизнью";
const description3 = "Более 10 лет на рынке г. Сум, море и ручейки благодарных отзывов, и начинающий опыт ведения страницы ФБ. Огромный ассортиментище, можно найти всё, и даже то, что вообще и придумать, казалось бы, невозможно!";
const description4 = "Тканевые ролеты хороши, когда есть необходимость защитить свой дом или офис от палящих солнечных лучей, а ещё от любопытных взглядов.";
const MainField = ({type}) => (
  <div className="Field mainField" type={type}>
    <Text text={description1}/>
    <Text text={description2}/>
    <Slider />
    <Text text={description3}/>
    <Text text={description4}/>
    <Description />
  </div>
)

export default MainField;
