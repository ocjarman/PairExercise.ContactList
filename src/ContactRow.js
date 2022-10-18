import React from "react";
import PropTypes from "prop-types";

const ContactRow = ({ contacts }) => {
  console.log(contacts);
  return (
    <tr>
      <td>{contacts.name}</td>
      <td>{contacts.phone}</td>
      <td>{contacts.email}</td>
    </tr>
  );
};

ContactRow.propTypes = {
  contacts: PropTypes.object,
};

export default ContactRow;
