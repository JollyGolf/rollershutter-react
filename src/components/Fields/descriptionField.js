import React, { Component } from 'react';

class DescriptionField extends Component {
  render() {
    return (
      <div className="Field DescriptionField">
      	<div className="item-of-desctiption-contacts">
      	  <div className="address">Местоположение офиса - Сумы <i className="fas fa-map-marker-alt icon-mark-red"></i> ул. Петропавловская 61, оф. 5</div>
      	</div>
      	<div className="item-of-desctiption-contacts">
      	  <div className="Contacts_number">Vodafone <i className="fas fa-phone icon-phone-red"></i> +38 (066) 5984267</div>
      	</div>
      	<div className="item-of-desctiption-contacts">
      	  <div className="Contacts_number">Kyivstar <i className="fas fa-phone icon-phone-blue"></i> +38 (098) 0555529</div>
      	</div>
      	<div className="item-of-desctiption-contacts">
      	  <div className="Contacts_email">Моя почта &nbsp;<i className="fas fa-envelope-open icon-mail-green"></i> gigamov@ukr.net</div>
      	</div>
      	<div className="item-of-desctiption-contacts">
      	  <div className="Viber">Viber &nbsp;<i class="fab fa-viber icon-viber-pink"></i> +38 (066) 5984267</div>
      	</div>
      </div>
    );
  }
}

export default DescriptionField;
