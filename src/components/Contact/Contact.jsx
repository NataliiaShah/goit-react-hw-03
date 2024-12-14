const Contact = ({ name, number, onDelete }) => {
    return (
        <>
            <li>
                <p>{name}</p>
                <p>{number}</p>
            </li>
            <button onClick={onDelete}>Delete</button>
        </>
    );
};

export default Contact;