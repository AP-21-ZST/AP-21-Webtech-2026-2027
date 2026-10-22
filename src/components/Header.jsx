function Header() {
    return (
        <header className="site-header">
            <a className="brand" href="#top" aria-label="WebTech - strona główna">
                <span className="brand-mark">W</span>
                <span>Web<span className="brand-accent">Tech</span></span>
            </a>
            <nav className="main-nav" aria-label="Główna nawigacja">
                <a className="active" href="#technologie">Technologie</a>
                <a href="#profil">Mój profil</a>
            </nav>
            <div className="header-status"><span className="status-dot" /> Semestr 2</div>
        </header>
    )
}

export default Header