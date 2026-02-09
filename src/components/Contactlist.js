import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../redux/contactsSlice";
import { Button } from "./Styled";

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.email} - {contact.phone}
          <Button onClick={() => dispatch(removeContact(contact.id))}>Remover</Button>
        </li>
      ))}
    </ul>
  );
}
