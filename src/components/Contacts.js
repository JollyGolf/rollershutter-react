import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    return (
      <div className="Contacts" >
        <div className="address">Сумы <i className="fas fa-map-marker-alt icon-mark-red"></i> ул. Петропавловская 61, оф. 5</div>
      	<div className="Contacts_number">Vodafone <i className="fas fa-phone icon-phone-red"></i> +38 (066) 5984267</div>
      	<div className="Contacts_number">Kyivstar <i className="fas fa-phone icon-phone-blue"></i> +38 (098) 0555529</div>
      	<div className="Contacts_email"><i className="fas fa-envelope-open icon-mail-green"></i> gigamov@ukr.net</div>
      </div>
    );
  }
}

export default Contacts;
