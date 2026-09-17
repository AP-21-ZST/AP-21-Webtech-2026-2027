function Technology() {
    return (
        <main className="dashboard" id="top">
            <section className="welcome-panel">
                <div>
                    <p className="eyebrow">PANEL NAUKI / 2026</p>
                    <h1>Twórz rzeczy,<br /><em>które działają.</em></h1>
                    <p className="intro">Twoje centrum technologii webowych. Śledź postęp, odkrywaj nowe narzędzia i rozwijaj swój warsztat krok po kroku.</p>
                    <a className="primary-button" href="#technologie">Odkryj technologie <span>↗</span></a>
                </div>
                <div className="hero-orbit" aria-hidden="true">
                    <span className="orbit-ring ring-one" />
                    <span className="orbit-ring ring-two" />
                    <span className="orbit-core">&lt;/&gt;</span>
                    <span className="orbit-label label-one">HTML</span>
                    <span className="orbit-label label-two">JS</span>
                </div>
            </section>

            <section className="stats-grid" aria-label="Podsumowanie nauki">
                <article className="stat-card stat-coral"><span className="stat-icon">◈</span><strong>03</strong><span>technologie w planie</span></article>
                <article className="stat-card stat-yellow"><span className="stat-icon">◷</span><strong>30</strong><span>godzin praktyki</span></article>
                <article className="stat-card stat-mint"><span className="stat-icon">↗</span><strong>68%</strong><span>ukończonego kursu</span></article>
            </section>

            <section className="content-section" id="technologie">
                <div className="section-heading"><div><p className="eyebrow">TWÓJ STACK</p><h2>Technologie</h2></div><span className="section-count">03 aktywne</span></div>
                <div className="technology-grid">
                    <article className="technology-card featured-tech"><div className="tech-top"><span className="tech-logo react-logo">⚛</span><span className="tag">W TOKU</span></div><h3>React</h3><p>Komponenty, stan aplikacji i interfejsy, które reagują na użytkownika.</p><div className="progress-meta"><span>Postęp</span><strong>72%</strong></div><div className="progress-bar"><span style={{ width: '72%' }} /></div><div className="tech-footer"><span>Frontend</span><span>30 godzin</span></div></article>
                    <article className="technology-card"><div className="tech-top"><span className="tech-logo js-logo">JS</span><span className="tag tag-muted">PLANOWANE</span></div><h3>JavaScript</h3><p>Logika, interakcje i energia po stronie przeglądarki.</p><div className="progress-meta"><span>Postęp</span><strong>45%</strong></div><div className="progress-bar"><span style={{ width: '45%' }} /></div><div className="tech-footer"><span>Frontend</span><span>24 godziny</span></div></article>
                    <article className="technology-card"><div className="tech-top"><span className="tech-logo css-logo">#</span><span className="tag tag-muted">PLANOWANE</span></div><h3>CSS</h3><p>Kolor, rytm i układ, który zamienia pomysł w doświadczenie.</p><div className="progress-meta"><span>Postęp</span><strong>31%</strong></div><div className="progress-bar"><span style={{ width: '31%' }} /></div><div className="tech-footer"><span>Design</span><span>18 godzin</span></div></article>
                </div>
            </section>

            <section className="profile-strip" id="profil"><div className="avatar">AP</div><div><p className="eyebrow">UCZESTNIK KURSU</p><h2>Adrian Ptak</h2><p>Klasa 4P · technik programista</p></div><div className="profile-note"><span>✦</span><strong>Najlepszy wynik</strong><small>React fundamentals</small></div></section>
        </main>
    )
}

export default Technology