import "./App.css";



import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "react-modal";

Modal.setAppElement("#root");

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  option: Yup.string().required("Required"),
});

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      closeModal();
    }, 400);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>Close Modal</button>
        <Formik
          initialValues={{ name: "", description: "", option: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="description">Description</label>
            <Field name="description" as="textarea" />
            <ErrorMessage name="description" component="div" />

            <label htmlFor="option">Option</label>
            <Field name="option" as="select">
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Field>
            <ErrorMessage name="option" component="div" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

export default App;

