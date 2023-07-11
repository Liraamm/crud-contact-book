import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";

export const contactContext = createContext();
export function useContactContext() {
  return useContext(contactContext);
}

const ContactContext = ({ children }) => {
  const [oneContact, setOneContact] = useState(null);
  const [contacts, setContact] = useState([]);

  async function addContact(newContact) {
    const { data } = await axios.post(API, newContact);
    setContact([...contacts, data]);
  }

  async function getContacts() {
    const { data } = await axios(API);
    setContact(data);
  }

  async function getOneContact(id) {
    const { data } = await axios.get(`${API}/${id}`);
    setOneContact(data);
  }

  async function editContact(id, newData) {
    await axios.patch(`${API}/${id}`, newData);
    getContacts();
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  const value = {
    getContacts,
    contacts,
    deleteContact,
    addContact,
    editContact,
    getOneContact,
    oneContact,
  };

  return (
    <contactContext.Provider value={value}>{children}</contactContext.Provider>
  );
};

export default ContactContext;
