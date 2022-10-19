import React from "react";
import PropTypes from "prop-types";
import Favorite from './Favorite';

const SingleContact = (props) => {
    //selected is the contact object that we selected, selectContact is the fxn that gets our data for one user
    const { selectedContact, selectContact } = props;
   
    return (
        <div id="single-contact">
            {/* <img src={imageUrl} /> */}
        <div id="contact-info">
            <p><b>Name:</b> {selectedContact.name} </p>
            <p><b>Email:</b> {selectedContact.email}</p>
            <p><b>Phone:</b> {selectedContact.phone} </p>
            <div>
                <b>Address:</b>
                <p>
                    <b>Street:</b> {selectedContact.address.street}
                    <br />
                    <b>City/State:</b> {selectedContact.address.city} {selectedContact.address.zipcode}
                </p>
            </div>
            <p><b>Company:</b> {selectedContact.company.name}</p>
            <Favorite contact={selectedContact} selectContact={selectContact} />
        </div>
    </div>
    );
  };
  
  SingleContact.propTypes = {
    contacts: PropTypes.object,
  };
  
  export default SingleContact;

