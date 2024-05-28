import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const Contactlisthaibro = props.contacts.map((contact, index) => {
    return <ContactCard key={index} contacts={contact} />;
  });

  return <div className='ui celled list'>{Contactlisthaibro}</div>;
};

export default ContactList;
