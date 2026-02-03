import ContactForm from "./components/contactform";
import ContactList from "./components/contactlist";

function App() {
  return (
    <div>
      <h1>Lista de Contatos</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;