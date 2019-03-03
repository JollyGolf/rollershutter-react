import React from 'react';
import Text from './../GeneralPage/Text.js';

const DescriptionField = () => (
  <div className="Field DescriptionField">
    <Text text="Кликните для перехода по ссылкам!" type="title" />
    <a href="https://www.google.com/maps/dir//50.9047503,34.7947555/@50.9047541,34.7945999,20z" className="a-non-decoration">
      <div className="item-of-desctiption-contacts">
        Местоположение офиса - Сумы&nbsp;<i className="fas fa-map-marker-alt icon-mark-red"></i>&nbsp;ул. Петропавловская 61, оф. 5
      </div>
    </a>
    <a href="tel:+380665984267" className="a-non-decoration">
      <div className="item-of-desctiption-contacts">
        <div>Vodafone <i className="fas fa-phone icon-phone-red" /> +38 (066) 5984267</div>
      </div>
    </a>
    <a href="tel:+380980555529" className="a-non-decoration">
      <div className="item-of-desctiption-contacts">
        <div>Kyivstar <i className="fas fa-phone icon-phone-blue" /> +38 (098) 0555529</div>
      </div>
    </a>
    <a href="mailto:gigamov@ukr.net" className="a-non-decoration">
      <div className="item-of-desctiption-contacts">
        Моя почта&nbsp;<i className="fas fa-envelope-open icon-mail-green" />&nbsp;gigamov@ukr.net
      </div>
    </a>
    <a href="https://t.me/anatoly_zhigamovsky" className="a-non-decoration">
      <div className="item-of-desctiption-contacts">
        Telegram&nbsp;<i className="fab fa-telegram icon-telegram-blue" />&nbsp;+38 (066) 5984267
      </div>
    </a>
    <a href="tel:+380665984267" className="a-non-decoration">
      <div className="item-of-desctiption-contacts">
        <div>Viber&nbsp;<i className="fab fa-viber icon-viber-pink" /> +38 (066) 5984267</div>
      </div>
    </a>
    <a href="https://t.me/zhigamovsky" className="a-non-decoration">
      <div className="item-of-desctiption-contacts">
        App Developer&nbsp;<i className="fab fa-telegram icon-telegram-blue" />&nbsp;Nikita Zhigamovsky
      </div>
    </a>
  </div>
)

export default DescriptionField;