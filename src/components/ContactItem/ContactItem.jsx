import React from "react";
import PropTypes from "prop-types";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import "./ContactItem.css";

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className="contactItem">
      <div className="topRow">
        <div className="icon">
          <FaUser />
        </div>
        <span className="name">{contact.name}</span>
      </div>
      <div className="bottomRow">
        <div className="icon">
          <FaPhoneAlt />
        </div>
        <span className="number">{contact.number}</span>
      </div>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
