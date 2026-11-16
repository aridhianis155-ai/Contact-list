

import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import './App.css'
import Contactliste from './components/Contactliste'
import {contactList} from './data/contact'
import ContactForm from './components/ContactForm';
import SearchBar from './components/SearchBar';

function App() {

  const [contacts,setContacts] = useState(()=>{
    const storedcontact = localStorage. getItem("contacts");
    return storedcontact? JSON.parse(storedcontact) : contactList;
  });
    const  [search1,setSearch1]= useState("")
    const [edit,setEdit]=useState(null)
    const [sortOrder,setSortOrder]=useState("az")
    const [toastMessage,setToastMessage]=useState("")
    const [showToast,setShowToast]=useState(false)
useEffect(
  ()=>{
    localStorage.setItem('contacts',JSON.stringify(contacts));

  },[contacts]);
  const addnew = (newcontact) =>{
    setContacts((movies) => [newcontact,...movies])
  }
  const deletein=(iddelete) =>{
    setContacts((contacts)=> contacts.filter((contact)=> contact.id !== iddelete))
  
}
const editc =(editcontact) =>{
  setContacts((contacts) =>
    contacts.map((contact) => contact.id === editcontact.id ? editcontact : contact)
  )
  setEdit(null)

}
const showSuccessToast = (message) => {
  setToastMessage(message)
  setShowToast(true)
}
const sortedContacts = [...contacts].sort((first, second) => {
  const comparison = first.fullName.localeCompare(second.fullName, 'fr', { sensitivity: 'base' })
  return sortOrder === 'az' ? comparison : -comparison
})
  return (
    <main className="contacts-page">
    <header className="topbar">
      <a className="app-brand" href="#" aria-label="ContactList, accueil">
        <span className="app-brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="9" cy="8" r="3" />
            <path d="M3.5 19c.4-3 2.4-4.5 5.5-4.5s5.1 1.5 5.5 4.5M16 8h5M18.5 5.5v5" />
            </svg>
          </span>
        <span>Contact<span className="brand-accent">List</span></span>
      </a>
      <span className="topbar-label">Mon carnet d’adresses</span>
      </header>

    <div className="dashboard-layout">
      <aside className="contact-form-panel">
        <div className="form-panel-heading">
          <span className="form-panel-icon" aria-hidden="true">+</span>
          <h2>{edit ? 'Modifier le contact' : 'Ajouter un contact'}</h2>
        </div>
        <ContactForm
          addNew={addnew}
          edit={edit}
          editc={editc}
          onSaved={showSuccessToast}
        />
      </aside>

      <section className="contacts-list-panel" aria-label="Liste des contacts">
        <div className="contact-toolbar">
            <SearchBar search1={search1} setSearch1={setSearch1}/>
            <Form.Select
              aria-label="Trier les contacts"
              className="sort-select"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
            >
              <option value="az">Nom : A à Z</option>
              <option value="za">Nom : Z à A</option>
            </Form.Select>
          </div>
          <div className="contacts-heading">
            <h1>
              <span className="contacts-heading-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="9" cy="8" r="3" />
                  <circle cx="18" cy="9" r="2.5" />
                  <path d="M3 19c.3-3 2.4-4.5 6-4.5s5.7 1.5 6 4.5M15 15c3.5-.7 5.7.7 6 3.5" />
                </svg>
              </span>
              Mes contacts
            </h1>
            <span className="contact-total">{contacts.length} contacts</span>
          </div>
          <Contactliste contacts={sortedContacts} deletein={deletein} search1={search1} onedit={setEdit}/>
        </section>
      </div>
      <ToastContainer position="top-center" className="p-3 toast-container">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          className="success-toast"
        >
          <Toast.Header>
            <strong className="me-auto">Succès</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </main>
  )
}

export default App
