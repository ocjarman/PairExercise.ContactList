import React from "react";
import PropTypes from "prop-types";

const ContactRow = (props) => {
  const { contact, selectContact } = props;

  return (
    <tr onClick={() => selectContact(contact.id)}>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
};

export default ContactRow;

ContactRow.propTypes = {
  contact: PropTypes.object,
  selectContact: PropTypes.func,
};
