import React, { useState } from "react";

const Contacts = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>

        {props.contacts.map((contact) => {
          return (
            //{<ContactRow />}
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Contacts;
