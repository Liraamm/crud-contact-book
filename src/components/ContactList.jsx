import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useContactContext } from "../contexts/ContactContext";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const { contacts, getContacts } = useContactContext();
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <h1>Contact-book</h1>
      <div className="d-flex" style={{ flexWrap: "wrap" }}>
        {contacts.map((item) => (
          <ContactItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
