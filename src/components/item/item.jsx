import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import "./card.css"
const Item = ({ item }) => {
  const { addCartData } = useContext(CartContext);
  return (
    <>
      <section className="card">
        <img className="card-img" src={item?.image} alt="game-image"></img>
        <article className="card-title">{item.title}</article>
        <article className="card-description">{item.description}</article>
        <section className="card-footer">
          <article className="price">{item.price}</article>
          <button
            className="card-button"
            onClick={() => {
              addCartData(item);
            }}
          >
            Add To Card
          </button>
        </section>
      </section>
    </>
  );
};
export default Item;
