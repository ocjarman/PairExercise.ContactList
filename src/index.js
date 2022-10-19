import React, { useState, useEffect } from "react";
import ReactDOM, { render } from "react-dom";
import ContactList from "./ContactList";
import SingleContact from "./SingleContact";
import Favorite from "./Favorite";

const Main = () => {
  const [contacts, setContacts] = useState([]); // -> [thing, setThing]
  const [selectedContact, setSelectedContact] = useState({}); // -> [thing, setThing]

  const getContacts = async () => {
    const response = await fetch(
      "http://jsonplace-univclone.herokuapp.com/users"
    );
    const contacts = await response.json();
    // console.log(contacts);
    setContacts(contacts);
  };

  useEffect(() => {
    getContacts();
  }, []);

  const selectContact = async (contactId, favoriteData) => {
    const response = await fetch(
      `http://jsonplace-univclone.herokuapp.com/users/${contactId}`
    );
    const contact = await response.json();
    console.log("index.js selectcontact fxn", contact);
    console.log("fav data:", favoriteData);

    //merging contact object with favorite key/value
    const contactWithFavData = {
      ...contact,
      ...favoriteData,
    };

    console.log("contactWithFavData: ", contactWithFavData);
    //what is this line doing?
    setSelectedContact(contactWithFavData); // `favoriteData` object contains `{favorite: true} or false
  };

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {selectedContact.id ? (
          <SingleContact
            selectedContact={selectedContact}
            selectContact={selectContact}
          />
        ) : (
          <ContactList contacts={contacts} selectContact={selectContact} />
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("app"));
