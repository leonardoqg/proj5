import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import { Button } from "./Styled";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ id: Date.now(), name, email, phone }));
    setName(""); setEmail(""); setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nome completo" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} />
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
