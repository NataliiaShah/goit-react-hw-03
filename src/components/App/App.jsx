import ContactForm from "../ContactForm/ContactForm";
import contactsArray from "../contacts.json";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";
import style from "./App.module.css";

const App = () => {

    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || contactsArray;

    const [contacts, setContacts] = useState(savedContacts); 
    const [filter, setFilter] = useState("");

    useEffect(() => {
        if (contacts.length > 0) {
            localStorage.setItem('contacts', JSON.stringify(contacts));
        }
    }, [contacts]);

    const handleDelete = (id) => {
            setContacts((prevContacts) =>
                prevContacts.filter(contact => contact.id !== id));
    };
    const filteredContacts =
        contacts.filter(contact =>contact.name.toLowerCase()
                .includes(filter.toLowerCase())
    );
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className={style.container}>
            <h1 className={style.mainTitle}>Phonebook 📱</h1>
            <ContactForm setContacts={setContacts}/>
            <SearchBox filter={filter} onFilterChange={handleFilterChange}/>
            <ContactList contacts={filteredContacts} onDelete={handleDelete}/>
        </div>
    );
};

export default App;