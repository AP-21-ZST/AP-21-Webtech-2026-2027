function Student() {
    return (
        <section className="student-card" id="student">
            <div className="student-avatar">AP</div>
            <div className="student-details">
                <p className="eyebrow">DANE UCZNIA</p>
                <h2>Adrian Ptak</h2>
                <p>Klasa 4P · technik programista</p>
            </div>
            <div className="student-skills">
                <strong>Obszary pracy</strong>
                <ul>
                    <li>Frontend</li>
                    <li>Interfejsy React</li>
                    <li>Projektowanie CSS</li>
                </ul>
            </div>
        </section>
    );
}

export default Student