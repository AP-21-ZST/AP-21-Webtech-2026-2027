import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CourseCard from './components/CourseCard'
import Technology from './components/Technology'
import Zdarzenie from './components/Zdarzenie'
import Zdarzenie2 from './components/Zdarzenie2'
import Produkt from './components/Product'

function App() {

 
  return (
    <div className="app-shell">
      <Header />
      <CourseCard />
      <Technology />
      <Zdarzenie />
      <Zdarzenie2
        name="React" />
      <Produkt 
        name="Laptop" 
        price={3000} />
      <Footer />
    </div>
  )
}

export default App
