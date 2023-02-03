import "./styles.css";
import ProductCard from "./components/ProductCard";

export default function App() {
  return (
    <div className="App">
      <ProductCard name="Master Wu" price="89 kr" cat="Ninjago" />

      <ProductCard name="Dragon Zane" price="109 kr" cat="Ninjago" />
    </div>
  );
}
