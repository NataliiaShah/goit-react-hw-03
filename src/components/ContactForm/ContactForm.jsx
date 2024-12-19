import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import style from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.number().required("Required")
});


const initialValues = {
  name: "",
  number: ""
};

const ContactForm = ({ setContacts }) => {

    const handleSubmit = (values, actions) => {
         
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    };

    setContacts(prevContacts => [...prevContacts, newContact]);

    console.log(newContact);
    actions.resetForm(); 
  };
    
    return (
        <Formik
            initialValues={ initialValues }
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
            validateOnChange={true}
        >
            
            {({ isValid, dirty }) => (
                <Form className={style.containerForm}>
                    <div className={style.thumb}>
                        <label className={style.formLabel} htmlFor="name">Name</label>
                        <Field className={style.formInput} type="text" name="name" id="name"/>
                        <ErrorMessage className={style.errorSpan} name="name" component="div"/>
                    </div>
                    <div className={style.thumb}>
                        <label className={style.formLabel} htmlFor="number">Number</label>
                        <Field className={style.formInput} type="number" name="number" id="number"/>
                        <ErrorMessage className={style.errorSpan} name="number" component="div"/>
                    </div>
                    <button className={style.buttonAdd} type="submit" disabled={!isValid || !dirty}>Add contact</button>
                </Form>
            )}
        </Formik>
    );
};


export default ContactForm;




