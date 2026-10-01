function Zdarzenie() {
    function showMessage() {
        return console.log('Kliknięto przycisk!');
    }
    return (
        <section className="zdarzenie">
            <div className="zdarzenie-heading">
                <div>
                    <p className="eyebrow">ZDARZENIA</p>
                    <h2>Najbliższe wydarzenia</h2>
                    <button onClick={showMessage}>
                        Kliknij mnie
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Zdarzenie;