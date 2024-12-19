import style from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
    return (
        <div className={style.containerContac}>
            <li className={style.thumbContact}>
                <p className={style.nameContact}>{name}</p>
                <p className={style.numberContact}>{number}</p>
            </li>
            <button className={style.buttonDelete} onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Contact;