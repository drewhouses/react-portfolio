import { Form, Button } from "react-bootstrap";
import { useState } from "react";
export default function ContactPage() {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const submitContact = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Form onSubmit={submitContact}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
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
          type="text"
          placeholder="message"
          onChange={handleChange}
          name="message"
          value={form.message}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
