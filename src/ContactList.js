import React, { useState } from "react";
import ContactRow from "./ContactRow";

const Contacts = (props) => {
  //   console.log(props.contacts);
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {props.contacts.map((contact) => {
          return <ContactRow key={contact.id} contacts={contact} />;
        })}
      </tbody>
    </table>
  );
};

export default Contacts;

{
  /* <tr>
{
  props.contacts.map((contacts) => {
          return <ContactRow key={props.contacts.id} />;
          <td>{singleContact.name}</td>
          <td>{singleContact.phone}</td>
          <td>{singleContact.email}</td>
          </tr>
        })
      }  */
}
