import React, { useEffect, useState } from "react";
import { useContactContext } from "../contexts/ContactContext";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const EditContactPage = () => {
  const { getOneContact, oneContact, editContact } = useContactContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [number, setNumber] = useState();
  const [img, setImg] = useState();

  useEffect(() => {
    getOneContact(id);
  }, []);

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setLastName(oneContact.lastName);
      setNumber(oneContact.number);
      setImg(oneContact.img);
    }
  }, [oneContact]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !lastName.trim() || !img.trim()) {
      return;
    }
    const newContact = {
      name,
      lastName,
      number,
      img,
    };
    editContact(id, newContact);
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

export default EditContactPage;
