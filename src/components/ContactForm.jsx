import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = ({ addNew,edit,editc,onSaved }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');
    useEffect(() => {
    setFullName(edit?.fullName?? "");
    setEmail(edit?.email ?? "");
    setPhoneNumber(edit?.phoneNumber??"")
    setImage(edit?.image ?? "");
    
  }, [edit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setImage('');
    if(edit){
editc({id: edit.id ,
      fullName,
      email,
      phoneNumber,
      image,})
      onSaved('Contact modifié avec succès.')
    }else{addNew({
      id: Date.now(),
      fullName,
      email,
      phoneNumber,
      image,
    });
      onSaved('Contact ajouté avec succès.')
    }
  };

  return (

    <Form className="container mt-4" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="contactFullName">
        <Form.Label>Full name</Form.Label>
        <Form.Control
          type="text"
          name="fullName"
          placeholder="Enter full name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactPhoneNumber">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="tel"
          name="phoneNumber"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactImage">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="url"
          name="image"
          placeholder="Enter image URL"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          required
        />
      </Form.Group>

      <Button
        type="submit"
        disabled={!fullName.trim() || !email.trim() || !phoneNumber.trim() || !image.trim()}
      >
        {edit ? "Modifier le contact" : "Ajouter un contact"}
      </Button>
    </Form>
  );
};

export default ContactForm;
