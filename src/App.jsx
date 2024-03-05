import './App.css'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import ContactHeader from './components/ContactHeader/ContactHeader.jsx'
import Navigation from './components/navigation/navigation.jsx'

function App() {
   return (
 <div >
<Navigation/>
<main className='main_container'>
<ContactHeader/>
<ContactForm/>
</main>
 </div>
  )
}

export default App
