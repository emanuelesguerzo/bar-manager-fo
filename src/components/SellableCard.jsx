import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const api = import.meta.env.VITE_API_URL;

function SellableCard({ sellable, onAddToCart, onShowIngredients }) {
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
      <div className="card-header p-0">
        {sellable.image && (
          <img
            src={`${api}/storage/${sellable.image}`}
            className="img-fluid"
            alt={sellable.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
        )}
        <button
          className="btn btn-sm position-absolute top-0 end-0 rounded-circle m-2 send-btn"
          onClick={() => onShowIngredients(sellable.slug)}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>


      <div className="card-body d-flex flex-column justify-content-between">
        <div>
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