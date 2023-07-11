import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useContactContext } from "../contexts/ContactContext";
import { useNavigate } from "react-router-dom";

const AddContactPage = () => {
  const { addContact } = useContactContext();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [number, setNumber] = useState();
  const [img, setImg] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !lastName.trim() || !number.trim() || !img.trim()) {
      return;
    }
    const newContact = {
      name,
      lastName,
      number,
      img,
    };
    addContact(newContact);
    navigate("/");
  }

  return (
    <div>
      <h1 className="text-center">Add contact</h1>
      <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <Form.Control
          className="my-3"
          autoFocus
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Form.Control
          className="my-3"
          autoFocus
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <Form.Control
          className="my-3"
          autoFocus
          type="text"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <Form.Control
          className="my-3"
          autoFocus
          type="url"
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />
        <Button
          className="mx-auto d-block mt-2 px-5"
          variant="success"
          type="submit"
        >
          Save
        </Button>
      </Form>
    </div>
  );
};

export default AddContactPage;
