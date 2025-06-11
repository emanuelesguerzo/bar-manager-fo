import { useState } from "react";

const api = import.meta.env.VITE_API_URL;

function SellableCard({ sellable, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Gestisco il click di aggiunta al carrello
  const handleClick = () => {
    if (quantity > 0) {
      onAddToCart(sellable, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
      setQuantity(1);
    }
  };

  return (
    <div className="card h-100">
      {sellable.image && (
        <img
          src={`${api}/storage/${sellable.image}`}
          className="card-img-top"
          alt={sellable.name}
        />
      )}

      <div className="card-body d-flex flex-column justify-content-between">
        <div className="">
          <h5 className="card-title">{sellable.name}</h5>
          <p className="card-text">{sellable.description}</p>
        </div>
        <div>
        <hr />
          <p className="card-text text-end mb-3 fs-5 price">{sellable.price} €</p>
          <input
            type="number"
            min="1"
            className="form-control mb-2"
            value={quantity}
            onChange={(event) => setQuantity(parseInt(event.target.value))}
          />
          <button
            className={`btn w-100 ${added ? "success-btn" : "send-btn"}`}
            onClick={handleClick}
          >
            {added ? "Aggiunto!" : "Aggiungi"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SellableCard