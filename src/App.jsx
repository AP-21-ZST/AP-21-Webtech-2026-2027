import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CourseCard from './components/CourseCard'
import Technology from './components/Technology'
import Zdarzenie from './components/Zdarzenie'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <CourseCard />
      <Technology />
      <Zdarzenie />
      <Footer />
    </div>
  )
}

export default App
