function Produkt({ name, price }) {
    function showProduct() {
        console.log("Wybrano: " + name + ", cena: " + price);
    }

    function selectProduct(name) {
        console.log("Wybrano produkt: " + name)
    }
    return (
        <>
            <section className="produkt">
                <button onClick={() => {
                    showProduct();
                    selectProduct(name);
                }}>Pokaż produkt</button>
            </section>
        </>
    )
}

export default Produkt;