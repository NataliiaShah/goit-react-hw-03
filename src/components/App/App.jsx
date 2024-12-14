import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState } from "react";

const App = () => {

    const initialContacts = [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

    const [contacts, setContacts] = useState(initialContacts);

    const handleDelete = (id) => {
            setContacts((prevContacts) =>
            prevContacts.filter(contact => contact.id !== id));
  };


    return (
        <div>
            <h1>Phonebook 📱</h1>
            <ContactForm setContacts={setContacts}/>
            <SearchBox />
            <ContactList contacts={contacts} onDelete={handleDelete} />
        </div>
    );
};

export default App;