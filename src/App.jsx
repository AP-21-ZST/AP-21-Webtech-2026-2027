<<<<<<< HEAD
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const pusteDane = {
  imie: "",
  nazwisko: "",
  email: "",
  telefon: "",
  dataUrodzenia: "",
  kraj: "",
  plec: "",
  zgoda: false,
  haslo: "",
  potwierdzenieHasla: ""
};

function App() {
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState(pusteDane);

  const resetForm = () => {
    setInputs({ ...pusteDane });
    setErrors({});
  };

  const handleSubmit = (formData) => {
    const przechwyconeBledy = {};
    const dane = {
      imie: formData.get("imie") || "",
      nazwisko: formData.get("nazwisko") || "",
      email: formData.get("email") || "",
      telefon: formData.get("telefon") || "",
      dataUrodzenia: formData.get("dataUrodzenia") || "",
      kraj: formData.get("kraj") || "",
      plec: formData.get("plec") || "",
      zgoda: formData.get("zgoda") === "on",
      haslo: formData.get("haslo") || "",
      potwierdzenieHasla: formData.get("potwierdzenieHasla") || ""
    };

    if (dane.imie.trim().length < 3) {
      przechwyconeBledy.imie = "Imię musi mieć co najmniej 3 znaki";
    }
    if (dane.nazwisko.trim().length < 2) {
      przechwyconeBledy.nazwisko = "Nazwisko musi mieć co najmniej 2 znaki";
    }
    if (!dane.email.includes("@")) {
      przechwyconeBledy.email = "Email musi zawierać znak @";
    }
    if (dane.telefon.trim().length < 9) {
      przechwyconeBledy.telefon = "Telefon musi mieć co najmniej 9 znaków";
    }
    if (!dane.dataUrodzenia) {
      przechwyconeBledy.dataUrodzenia = "Podaj datę urodzenia";
    }
    if (!dane.kraj) {
      przechwyconeBledy.kraj = "Wybierz kraj";
    }
    if (!dane.plec) {
      przechwyconeBledy.plec = "Wybierz płeć";
    }
    if (!dane.zgoda) {
      przechwyconeBledy.zgoda = "Zaznacz wymaganą zgodę";
    }
    if (dane.haslo.length < 6) {
      przechwyconeBledy.haslo = "Hasło musi mieć co najmniej 6 znaków";
    }
    if (dane.haslo !== dane.potwierdzenieHasla) {
      przechwyconeBledy.potwierdzenieHasla = "Hasła muszą być takie same";
    }

    setErrors(przechwyconeBledy);

    if (Object.keys(przechwyconeBledy).length > 0) return;

    setInputs(dane);
  };

  return (
    <main className="container mt-4">
      <h2>Formularz rejestracyjny</h2>

      <form action={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="imie" className="form-label">Imię:</label>
          <input
            type="text"
            id="imie"
            name="imie"
            className="form-control"
            placeholder="Imię"
            value={inputs.imie}
            onChange={(e) => setInputs({ ...inputs, imie: e.target.value })}
            aria-invalid={Boolean(errors.imie)}
          />
          {errors.imie && <span className="text-danger">{errors.imie}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="nazwisko" className="form-label">Nazwisko:</label>
          <input
            type="text"
            id="nazwisko"
            name="nazwisko"
            className="form-control"
            placeholder="Nazwisko"
            value={inputs.nazwisko}
            onChange={(e) => setInputs({ ...inputs, nazwisko: e.target.value })}
            aria-invalid={Boolean(errors.nazwisko)}
          />
          {errors.nazwisko && <span className="text-danger">{errors.nazwisko}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Adres email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="telefon" className="form-label">Telefon:</label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            className="form-control"
            placeholder="Numer telefonu"
            value={inputs.telefon}
            onChange={(e) => setInputs({ ...inputs, telefon: e.target.value })}
            aria-invalid={Boolean(errors.telefon)}
          />
          {errors.telefon && <span className="text-danger">{errors.telefon}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="dataUrodzenia" className="form-label">Data urodzenia:</label>
          <input
            type="date"
            id="dataUrodzenia"
            name="dataUrodzenia"
            className="form-control"
            value={inputs.dataUrodzenia}
            onChange={(e) => setInputs({ ...inputs, dataUrodzenia: e.target.value })}
            aria-invalid={Boolean(errors.dataUrodzenia)}
          />
          {errors.dataUrodzenia && <span className="text-danger">{errors.dataUrodzenia}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="kraj" className="form-label">Kraj:</label>
          <select
            id="kraj"
            name="kraj"
            className="form-select"
            value={inputs.kraj}
            onChange={(e) => setInputs({ ...inputs, kraj: e.target.value })}
            aria-invalid={Boolean(errors.kraj)}
          >
            <option value="">Wybierz kraj</option>
            <option value="Polska">Polska</option>
            <option value="Niemcy">Niemcy</option>
            <option value="Czechy">Czechy</option>
            <option value="Ukraina">Ukraina</option>
          </select>
          {errors.kraj && <span className="text-danger">{errors.kraj}</span>}
        </div>

        <fieldset className="mb-3">
          <legend className="form-label">Płeć:</legend>
          {[
            ["kobieta", "Kobieta"],
            ["mezczyzna", "Mężczyzna"],
            ["inna", "Inna"]
          ].map(([value, label]) => (
            <div className="form-check" key={value}>
              <input
                type="radio"
                id={`plec-${value}`}
                name="plec"
                value={value}
                className="form-check-input"
                checked={inputs.plec === value}
                onChange={(e) => setInputs({ ...inputs, plec: e.target.value })}
              />
              <label htmlFor={`plec-${value}`} className="form-check-label">{label}</label>
            </div>
          ))}
          {errors.plec && <span className="text-danger">{errors.plec}</span>}
        </fieldset>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            id="zgoda"
            name="zgoda"
            className="form-check-input"
            checked={inputs.zgoda}
            onChange={(e) => setInputs({ ...inputs, zgoda: e.target.checked })}
            aria-invalid={Boolean(errors.zgoda)}
          />
          <label htmlFor="zgoda" className="form-check-label">
            Akceptuję wymagane warunki
          </label>
          {errors.zgoda && <div className="text-danger">{errors.zgoda}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="haslo" className="form-label">Hasło:</label>
          <input
            type="password"
            id="haslo"
            name="haslo"
            className="form-control"
            value={inputs.haslo}
            onChange={(e) => setInputs({ ...inputs, haslo: e.target.value })}
            aria-invalid={Boolean(errors.haslo)}
          />
          {errors.haslo && <span className="text-danger">{errors.haslo}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="potwierdzenieHasla" className="form-label">Potwierdź hasło:</label>
          <input
            type="password"
            id="potwierdzenieHasla"
            name="potwierdzenieHasla"
            className="form-control"
            value={inputs.potwierdzenieHasla}
            onChange={(e) => setInputs({ ...inputs, potwierdzenieHasla: e.target.value })}
            aria-invalid={Boolean(errors.potwierdzenieHasla)}
          />
          {errors.potwierdzenieHasla && (
            <span className="text-danger">{errors.potwierdzenieHasla}</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary me-2">Zarejestruj</button>
        <button type="reset" className="btn btn-secondary" onClick={resetForm}>Reset</button>
      </form>
    </main>
  );
}

export default App;
=======
import './App.css'
import Technology from './components/Technology'

const technologies = [
  { id: 1, name: 'React', category: 'Frontend', hours: 30, image: 'react.webp' },
  { id: 2, name: 'Node.js', category: 'Backend', hours: 40, image: 'nodejs.webp' },
  { id: 3, name: 'MySQL', category: 'Baza danych', hours: 20, image: 'mysql.webp' },
  { id: 4, name: 'Express', category: 'Backend', hours: 25, image: 'express.webp' },
  { id: 5, name: 'MongoDB', category: 'Baza danych', hours: 30, image: 'mongodb.webp' },
  { id: 6, name: 'Bootstrap', category: 'Frontend', hours: 15, image: 'bootstrap.webp' },
  { id: 7, name: 'CSS', category: 'Frontend', hours: 20, image: 'css.webp' },
  { id: 8, name: 'HTML', category: 'Frontend', hours: 10, image: 'html.webp' },
  { id: 9, name: 'PHP', category: 'Backend', hours: 35, image: 'php.webp' }
];

function App() {
  return (
    <main className="app-main">
      <header className="app-header">
        <p className="app-kicker">WebTech / katalog</p>
        <h1>Technologie webowe</h1>
        <p className="app-summary">{technologies.length} technologii do poznania</p>
      </header>

      <div className="technology-grid">
        {technologies.map((technology) => (
          <Technology
            key={technology.id}
            name={technology.name}
            category={technology.category}
            hours={technology.hours}
            image={technology.image}
          />
        ))}
      </div>
    </main>
  )
}

export default App
>>>>>>> ac90ac7ab7cd35a4f027c38e025cc41f47b4bdaa
