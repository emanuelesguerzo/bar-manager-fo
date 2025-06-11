import { useEffect, useState } from "react";
import axios from "axios";

const api = import.meta.env.VITE_API_URL

function IngredientModal({ slug, show, onClose }) {
    const [sellable, setSellable] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
       
        if (slug && show) {
            setIsLoading(true); 
            setError(null);      
            setSellable(null);

            axios.get(`${api}/api/sellables/${slug}`)
                .then((res) => {
                    setSellable(res.data.data);
                })
                .catch((err) => {
                    console.error("Errore nel caricamento degli ingredienti:", err);
                    setError('Impossibile caricare gli ingredienti. Riprova più tardi.');
                    setSellable(null); 
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [slug, show]);

    return (
        <div
            className={`modal fade ${show ? 'show d-block' : ''}`}
            tabIndex="-1"
            role="dialog"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            aria-labelledby="ingredientModalTitle"
            aria-modal="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content custom-style">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ingredientModalTitle">
                            {/* Mostra il nome del drink se disponibile, altrimenti un placeholder di caricamento */}
                            Ingredienti di {sellable?.name || (isLoading ? '...' : 'Drink Sconosciuto')}
                        </h5>
                        {/* Pulsante per chiudere il modale, usa la prop onClose */}
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Chiudi"></button>
                    </div>
                    <div className="modal-body">
                        {isLoading ? (
                            <>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="spinner-border text-warning me-2" role="status"></div>
                                    <p className="fs-5 text-light mt-3">Caricamento ingredienti...</p>
                                </div>
                            </>
                        ) : error ? (
                            <p className="text-danger">{error}</p>
                        ) : sellable ? (
                            sellable.products?.length > 0 ? (
                                <ul className="list-group">
                                    {sellable.products.map((product) => (
                                        <li className="list-group-item" key={product.id}>
                                            {product.brand} - {product.name}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Nessun ingrediente disponibile per questo drink.</p>
                            )
                        ) : (
                            <p>Seleziona un drink per visualizzare gli ingredienti.</p>
                        )}
                    </div>
                    <div className="modal-footer">

                        {/* Pulsante Chiudi */}
                        <button className="btn send-btn" onClick={onClose}>
                            Chiudi
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default IngredientModal;