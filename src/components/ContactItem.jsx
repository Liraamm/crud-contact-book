import React from "react";
import { Button, Card } from "react-bootstrap";
import { useContactContext } from "../contexts/ContactContext";
import { useNavigate } from "react-router-dom";

const ContactItem = ({ item }) => {
  const navigate = useNavigate();
  const { deleteContact } = useContactContext();
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>
          {item.name} {item.lastName}
        </Card.Title>
        <Card.Text>{item.number}</Card.Text>
        <Button
          className="mx-5"
          variant="dark"
          onClick={() => {
            navigate(`/edit/${item.id}`);
          }}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            deleteContact(item.id);
          }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ContactItem;
