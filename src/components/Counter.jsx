import { useState } from "react";

function Counter() {

  const [name, setName] = useState("React");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Jan",
    age: 18
  });
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);

  function Info() {
    setActive(!active)
  }

  function Dodaj() {
    setCount(count + 1)
  }

  function Odejmij() {
    setCount(count - 1)
  }

  function Resetuj() {
    setCount(0)
  }

  return (
    <div>
      <p>Licznik: {count} | True/False: {active ? "True" : "False"}</p>

      <button onClick={Dodaj}>
        Zwiększ
      </button>

      <button onClick={Odejmij}>
        Zmniejsz
      </button>

      <button onClick={Resetuj}>
        Resetuj
      </button>

      <button onClick={Info}>
        True/False
      </button>
    </div>
  );
}

export default Counter;