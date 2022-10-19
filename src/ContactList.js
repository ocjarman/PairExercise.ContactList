import React, { useState } from "react";
import ContactRow from "./ContactRow";
import PropTypes from "prop-types";

const ContactList = (props) => {
  const { contacts, selectContact } = props;
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              contact={contact}
              selectContact={selectContact}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  selectContact: PropTypes.func,
};
