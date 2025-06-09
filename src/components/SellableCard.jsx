const api = import.meta.env.VITE_API_URL;

function SellableCard({ sellable }) {
  return (
    <div className="card h-100 shadow-sm">
      {sellable.image && (
        <img
          src={`${import.meta.env.VITE_API_URL}/storage/${sellable.image}`}
          className="card-img-top"
          alt={sellable.name}
        />
      )}

      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{sellable.name}</h5>
          <p className="card-text text-muted">€ {sellable.price}</p>
        </div>
        <button className="btn btn-primary mt-3">Aggiungi</button>
      </div>
    </div>
  )
}

export default SellableCard