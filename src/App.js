import { useState } from "react"
import ContactForm from "./components/ContactForm.jsx";
import './App.css';
import ContactList from "./components/ContactList.jsx";


function App() {
  const [contacts, updateContacts] = useState([]);

  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo])
  }
  console.log(contacts)

  return (
    <div className="App">
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
