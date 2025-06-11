import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function CartModal({ show, cart, onClose, onSubmit, onRemove }) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div
            className={`modal fade ${show ? 'show d-block' : ''}`}
            tabIndex="-1"
            role="dialog"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content custom-style">
                    <div className="modal-header">
                        <h5 className="modal-title">Il tuo carrello</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {cart.length === 0 ? (
                            <p>Carrello vuoto.</p>
                        ) : (
                            <ul className="list-group mb-3">
                                {cart.map((item) => (
                                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <span>{item.name} x {item.quantity}</span>
                                            <br />
                                            <small className="price">{(item.price * item.quantity).toFixed(2)} €</small>
                                        </div>
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => onRemove(item.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <p className="fs-5 mb-0 text-end">
                            <strong>Totale: {total.toFixed(2)} €</strong>
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn reset-btn" onClick={() => setShowCartModal(false)}>
                            Annulla
                        </button>
                        <button className="btn send-btn" onClick={onSubmit}>
                            Invia Ordine
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartModal;