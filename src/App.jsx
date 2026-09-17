import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Technology from './components/Technology'
import Student from './components/Student'
import InfoBox from './components/InfoBox'
import Form from './components/Form'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Technology />
      <Form />
      <InfoBox />
      <Footer />
      <Student />
    </div>
  )
}

export default App
