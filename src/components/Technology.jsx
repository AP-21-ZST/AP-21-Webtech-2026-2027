import { useState } from 'react'

function Technology({ name, category, hours, image }) {
  const [likes, setLikes] = useState(0)
  const [isLearning, setIsLearning] = useState(false)

  function showTechnology() {
    console.log('Technologia: ' + name)
    console.log('Kategoria: ' + category)
    console.log('Czas nauki: ' + hours + ' godz.')
  }

  return (
    <article className="technology-card">
      <div className="technology-image">
        <img
          src={`${import.meta.env.BASE_URL}images/${image}`}
          alt={`Logo technologii ${name}`}
        />
      </div>

      <div className="technology-content">
        <div className="technology-heading">
          <h2>{name}</h2>
          <span className="technology-badge">{category}</span>
        </div>

        <p className="technology-hours">Czas nauki: {hours} godz.</p>

        <div className="technology-state">
          <p>Polubienia: <strong>{likes}</strong></p>
          <p className="learning-status">
            {isLearning ? 'Uczę się' : 'Jeszcze nie uczę się'}
          </p>
        </div>

        <div className="technology-actions">
          <button className="button button-primary" onClick={() => setLikes(likes + 1)}>
            Lubię
          </button>
          <button className="button button-secondary" onClick={() => setLikes(0)}>
            Resetuj polubienia
          </button>
          <button className="button button-secondary" onClick={() => setIsLearning(!isLearning)}>
            Zmień status nauki
          </button>
          <button className="button button-text" onClick={showTechnology}>
            Pokaż informacje w konsoli
          </button>
        </div>
      </div>
    </article>
  )
}

export default Technology