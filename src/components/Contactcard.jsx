
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Contactcard = ( {id,fullName,
    email,
    phoneNumber,
    image,deletein,onedit}) => {
      const handeldelet=() =>{
if(window.confirm(`ETRE VOUS SURE DE SUPPRIMER  ${fullName}`))
  deletein(id)
      }
  return (
    <div>
       <Card className="contact-card" style={{ width: '18rem' }}>
      <Card.Img className="contact-avatar" variant="top" src={image} alt={fullName} />
      <Card.Body>
        <Card.Title>{fullName}</Card.Title>
        <Card.Text className="contact-email">
          {email}
        </Card.Text>
        
            <span className="contact-phone">{phoneNumber}</span>

        <div className="contact-actions">
          <Button className="edit-button" variant="primary" onClick={() => onedit({id,fullName,email,phoneNumber,image})}>Edit</Button>
          <Button className="delete-button" variant="primary" onClick={handeldelet}>Supprimer</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Contactcard
