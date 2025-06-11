function SuccessModal({ show, onClose }) {

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
                        <h5 className="modal-title">Ordine inviato!</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p className='mb-0'>Grazie mille! Il tuo ordine è stato ricevuto e sarà servito al più presto.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn reset-btn" onClick={onClose}>
                            Chiudi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuccessModal;