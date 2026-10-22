import { useState } from 'react'

function Form() {
  const [formData, setFormData] = useState({ name: '', technology: 'React', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setSent(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="learning-form" id="kontakt">
      <div className="form-copy">
        <p className="eyebrow">PLANUJ KOLEJNY KROK</p>
        <h2>Masz pomysł na naukę?</h2>
        <p>Wybierz technologię i zapisz krótki cel na najbliższą sesję.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Twój cel
          <input name="name" value={formData.name} onChange={handleChange} placeholder="np. Zbudować kartę profilu" required />
        </label>
        <label>
          Technologia
          <select name="technology" value={formData.technology} onChange={handleChange}>
            <option>React</option>
            <option>JavaScript</option>
            <option>CSS</option>
          </select>
        </label>
        <label className="full-field">
          Notatka
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Co chcesz przećwiczyć?" rows="3" />
        </label>
        <button className="form-button" type="submit">Dodaj cel <span>+</span></button>
        {sent && <p className="form-success" role="status">Cel zapisany. Powodzenia w nauce!</p>}
      </form>
    </section>
  )
}

export default Form
