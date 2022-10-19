import React from "react";
import PropTypes from "prop-types";

const Favorite = (props) => {
  const { contact, selectContact } = props;

  const updateFavoriteStatus = async (contact) => {
    const { id, favorite } = contact;
    selectContact(id, { favorite: !favorite });
  };

  return (
    <div
      className="fav-container"
      onClick={() => updateFavoriteStatus(contact)}
    >
      {contact.favorite ? (
        <img className="fav-image" src="/checked.png"></img>
      ) : (
        <img className="fav-image" src="/unchecked.png"></img>
      )}
      <span>Favorite</span>
    </div>
  );
};

export default Favorite;

Favorite.propTypes = {
  contact: PropTypes.object,
  selectContact: PropTypes.func,
};
