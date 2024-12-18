import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from "yup";

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
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type="text" name="name" id="name"/>
                        <ErrorMessage name="name" component="div" style={{ color: 'red' }}/>
                    </div>
                    <div>
                        <label htmlFor="number">Number</label>
                        <Field type="number" name="number" id="number"/>
                        <ErrorMessage name="number" component="div" style={{ color: 'red' }}/>
                    </div>
                    <button type="submit" disabled={!isValid || !dirty}>Add contact</button>
                </Form>
            )}
        </Formik>
    );
};


export default ContactForm;




