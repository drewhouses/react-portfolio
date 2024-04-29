import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import emailjs from "@emailjs/browser";
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitContact = (e) => {
    e.preventDefault();
    console.log(form);

    emailjs
      .sendForm("service_tc6ityn", "template_bo08sqi", ".contactForm", {
        publicKey: "KDsYyuJD-HZIaiyQd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (err) => {
          console.log("Failed", err);
        }
      );
    setForm({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="container col-lg-6 contact-form">
      <Form className="contactForm" onSubmit={submitContact}>
        <p>Please reach out to me below: </p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            type="textarea"
            placeholder="Enter your message here..."
            onChange={handleChange}
            name="message"
            value={form.message}
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
