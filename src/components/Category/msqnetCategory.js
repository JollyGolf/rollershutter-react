import React from 'react';
import Gallery from './../Gallery/Gallery.js';
import Text from './../GeneralPage/Text.js';

const title = "Показаны фотографии категории Москитные Сетки";
const description = "Москитная сетка - это абсолютно безвредный, эффективный и экономичный способ борьбы с вредными летающими насекомыми, а также отличная защита от пуха, пылинок растений, пыли, что обеспечивает превосходную охрану для людей, страдающих аллергией. А также защищает от попадания в помещение посторонних предметов. Защита от падения из окна домашних животных и предметов, частичная защита от дождевых капель. Подходит для любых типов окон: алюминиевых, ПВХ или деревянных.";

const MsqnetCategory = ({content}) => (
  <div className="PlisseCategory">
    <Text text={title} type="title"/>
    <Gallery content={content} />
    <br />
    <Text text={description} type="description"/>
  </div>
)

export default MsqnetCategory;