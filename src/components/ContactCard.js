// ContactCard.js
import React from 'react';
import user from './images/user.png';

const ContactCard = (props) => {
  const { name, email } = props.contacts;

  return (
    <div className='item ' >
      <img className='ui avatar image' src={user} alt='user' />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        
      <div className='content'>
        <div className='header'>{name}</div>
        <div>{email}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }}></i>
      </div>
      </div>
    </div>
  );
}

export default ContactCard;




