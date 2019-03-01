import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    return (
      <div className="Contacts" >
        <a href="https://www.google.com/maps/dir//50.9047503,34.7947555/@50.9047541,34.7945999,20z" className="a-non-decoration-alternative">
          <div className="address">Сумы <i className="fas fa-map-marker-alt icon-mark-red"></i> ул. Петропавловская 61, оф. 5</div>
      	</a>
        <a href="tel:+380665984267" className="a-non-decoration-alternative">
          <div className="Contacts_number">Vodafone <i className="fas fa-phone icon-phone-red"></i> +38 (066) 5984267</div>
      	</a>
        <a href="tel:+380980555529" className="a-non-decoration-alternative">
          <div className="Contacts_number">Kyivstar <i className="fas fa-phone icon-phone-blue"></i> +38 (098) 0555529</div>
      	</a>
        <a href="mailto:gigamov@ukr.net" className="a-non-decoration-alternative">
          <div className="Contacts_email"><i className="fas fa-envelope-open icon-mail-green"></i> gigamov@ukr.net</div>
        </a>
      </div>
    );
  }
}

export default Contacts;
