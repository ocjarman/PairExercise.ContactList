import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import Contacts from "./ContactList";
import ContactRow from "./ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

const Main = ({ key }) => {
  const [contacts, setContacts] = useState(dummyContacts); // -> [thing, setThing]

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <Contacts contacts={contacts} />
      </div>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("app"));
