function Technology() {
  const technologies = [
    {
      id: 1,
      name: "Express",
      category: "Backend",
      hours: 25
    },
    {
      id: 2,
      name: "MongoDB",
      category: "Database",
      hours: 30
    },
    {
      id: 3,
      name: "React",
      category: "Frontend",
      hours: 40
    },
    {
      id: 4,
      name: "Node.js",
      category: "Backend",
      hours: 35
    },
    {
      id: 5,
      name: "HTML",
      category: "Frontend",
      hours: 20
    },
    {
      id: 6,
      name: "CSS",
      category: "Frontend",
      hours: 15
    }
  ];
    return (
        <section className="technology-section" id="technologie">
            <div className="technology-heading">
                <div>
                    <p className="eyebrow">BAZA NARZĘDZI</p>
                    <h2>Technologie</h2>
                </div>
                <span>{technologies.length} aktywne</span>
            </div>
            <div className="technology-grid">
                {technologies.map((item, index) => (
                    <article className={`technology-card technology-card--${index + 1}`} key={item.id}>
                        <div className="technology-card__number">0{item.id}</div>
                        <div>
                            <p className="technology-card__category">{item.category}</p>
                            <h3>{item.name}</h3>
                            <p className="technology-card__description">Rozwijaj praktyczne umiejętności i buduj własne projekty.</p>
                        </div>
                        <span className="technology-card__arrow">↗</span>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Technology;