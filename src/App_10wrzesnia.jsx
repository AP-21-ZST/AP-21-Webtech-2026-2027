import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const app = {
  name: 'WebTech',
  version: '1.0',
  author: 'Adrian Ptak',
  technologiesCount: 3,
};

const technology = {
  name: 'React',
  category: 'Frontend',
  hours: 30,
  active: true,
};

const student = {
  name: 'Adrian',
  surname: 'Ptak',
  className: '4P',
  specialization: 'technik programista',
};

function App() {
  return (
    <div>
      <h1>{app.name}</h1>

      <section>
        <p><b>Wersja:</b> {app.version}</p>
        <p><b>Autor:</b> {app.author}</p>
        <p><b>Liczba technologii:</b> {app.technologiesCount}</p>
      </section>

      <section>
        <h2>Technologia</h2>
        <p>
          <strong>Nazwa technologii:</strong> {technology.name}
        </p>
        <p>
          <strong>Kategoria:</strong> {technology.category}
        </p>
        <p>
          <strong>Liczba godzin:</strong> {technology.hours}
        </p>
      </section>

      <section>
        <h2>Uczeń</h2>
        <p>
          <strong>Imię i nazwisko:</strong> {student.name} {student.surname}
        </p>
        <p>
          <strong>Klasa:</strong> {student.className}
        </p>
        <p>
          <strong>Specjalizacja:</strong> {student.specialization}
        </p>
      </section>

      <p className="footer">&copy; 2026 {app.name}. Wszystkie prawa zastrzeżone.</p>
    </div>
  );
}

export default App;