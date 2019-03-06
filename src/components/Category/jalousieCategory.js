import React from 'react';
import Gallery from './../Gallery/Gallery.js';
import Text from './../GeneralPage/Text.js';

const title = "Показаны фотографии категории Жалюзи";
const description = "Жалюзи являются одним из видов оконных штор, представляющих собой регулируемые планки из ткани, древесины, пластмассы или металла, скреплённые таким образом, чтобы планки могли вращаться, изменяя положение от открытого к закрытому. В горизонтальных жалюзи используется так называемая система «лесенки», позволяющая открывать или закрывать жалюзи специальным вращающимся барабаном, при этом шнур подъёма необходим для фиксации жалюзи в нужном положении, а тросточка — для вращения планок. Тип управления «трость-шнур» характерен для жалюзи стандартной коллекции.";

const JalousieCategory = ({content}) => (
  <div className="PlisseCategory">
    <Text text={title} type="title"/>
    <Gallery content={content} />
    <br />
    <Text text={description} type="description"/>
  </div>
)

export default JalousieCategory;