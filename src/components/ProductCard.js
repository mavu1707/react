import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";
import ProductCat from "./ProductCat";

export default function ProductCard({ name, price, cat }) {
  return (
    <article className="productCard">
      <ProductTitle name={name} />
      <ProductPrice price={price} />
      <ProductCat cat={cat} />
      <button>Legg til i handlekurv</button>
    </article>
  );
}
