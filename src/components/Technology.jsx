function Technology() {
    const technology = [
        {
            id: 1,
            name: "React",
            category: "www"
        },
        {
            id: 2,
            name: "Git",
            category: "www"
        },
        {
            id: 3,
            name: "JavaScript",
            category: "www"
        }
    ];

    return (
        <section className="technology-section" id="technologie">
            <div className="technology-heading">
                <div>
                    <p className="eyebrow">BAZA NARZĘDZI</p>
                    <h2>Technologie</h2>
                </div>
                <span>{technology.length} aktywne</span>
            </div>
            <div className="technology-grid">
                {technology.map((item, index) => (
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