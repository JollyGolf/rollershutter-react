import React, { Component } from 'react';

class DescriptionField extends Component {
  render() {
    return (
      <div className="Field DescriptionField">
      	<div className="item-of-desctiption-contacts">
      	  <div>
      	    Местоположение офиса - Сумы&nbsp;<i className="fas fa-map-marker-alt icon-mark-red"></i>&nbsp;ул. Петропавловская 61, оф. 5
      	    <a href="https://www.google.com/maps/dir//50.9047503,34.7947555/@50.9047541,34.7945999,20z" className="a-non-decoration a-style-contact">&nbsp;&nbsp;<address>[нажмите чтобы перейти]</address></a>
      	  </div>
      	</div>
      	<div className="item-of-desctiption-contacts">
      	  <div>Vodafone <i className="fas fa-phone icon-phone-red"></i> +38 (066) 5984267</div>
      	</div>
      	<div className="item-of-desctiption-contacts">
      	  <div>Kyivstar <i className="fas fa-phone icon-phone-blue"></i> +38 (098) 0555529</div>
      	</div>
      	<div className="item-of-desctiption-contacts">
      	  <div>
      	    Моя почта&nbsp; <i className="fas fa-envelope-open icon-mail-green"></i>&nbsp;gigamov@ukr.net 
      	    <a href="mailto:gigamov@ukr.net" className="a-non-decoration a-style-contact">&nbsp;&nbsp;<address>[нажмите чтобы перейти]</address></a>
      	  </div>
      	</div>
      	<div className="item-of-desctiption-contacts">
      	  <div>Viber&nbsp;<i className="fab fa-viber icon-viber-pink"></i> +38 (066) 5984267</div>
      	</div>
      	<div className="item-of-desctiption-contacts">
      	  <div>
      	    Telegram&nbsp;<i className="fab fa-telegram icon-telegram-blue"></i>&nbsp;+38 (066) 5984267
      	    <a href="https://t.me/anatoly_zhigamovsky" className="a-non-decoration a-style-contact">&nbsp;&nbsp;<address>[нажмите чтобы перейти]</address></a>
      	  </div>
      	</div>
      </div>
    );
  }
}

export default DescriptionField;
