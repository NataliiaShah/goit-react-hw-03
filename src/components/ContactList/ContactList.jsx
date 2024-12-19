import Contact from "../Contact/Contact";
import style from "./ContactList.module.css"

const ContactList = ({contacts, onDelete}) => {
    return (
        <>
            <ul className={style.listContacts}>
                {contacts.map((contact) => (
                    <div className={style.itemContact} key={contact.id}>
                    <Contact 
                        name={contact.name}
                        number={contact.number}
                        onDelete={() => onDelete(contact.id)} />
                    </div>
                ))}         
            </ul>
        </>
    );
};

export default ContactList;