function Zdarzenie2({ name }) {

    function showTechnology() {
        console.log("Wybrano technologię: " + name);
    }

    return (
        <section className="zdarzenie">
            <h2>{name}</h2>
            <button onClick={showTechnology}>Wybierz technologię</button>
        </section>
    );
}

export default Zdarzenie2;