
import Contactcard from './Contactcard'



const Contactliste = ({ contacts , deletein, search1 ,onedit }) => {
  const filterecontacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(search1.trim().toLowerCase())
  )

  return (
    <div>
      {filterecontacts.map((contact) => (
        <Contactcard key={contact.id} {...contact} deletein={deletein} onedit={onedit} />
      ))}
    </div>
  )
}

export default Contactliste
