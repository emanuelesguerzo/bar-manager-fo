import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SellableCard from '../components/SellableCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartModal from '../components/CartModal';
import SuccessModal from '../components/SuccessModal';

const api = import.meta.env.VITE_API_URL;

function OrderPage() {
    const { tableId } = useParams();
    const [sellables, setSellables] = useState([]);
    const [cart, setCart] = useState([]);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showCartModal, setShowCartModal] = useState(false);

    // Richiesta articoli
    useEffect(() => {
        axios.get(`${api}/api/sellables`).then((res) => {
            setSellables(res.data.data);
        })
            .catch((err) => {
                console.error('Errore nel caricamento:', err);
                setSellables([]);
            });
    }, []);

    // Aggiunta al carrello
    const handleAddToCart = (sellable, quantity) => {
        setCart((prevCart) => {

            // Estraggo nome categoria
            const existing = prevCart.find((item) => item.id === sellable.id);

            if (existing) {
                return prevCart.map((item) =>
                    item.id === sellable.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...sellable, quantity }];
            }

        });
    };

    // Rimozione dal carrello
    const handleRemoveFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    // Invio ordine al backend
    const handleSubmit = () => {

        // Preparo i dati da inviare
        const payload = {
            table_number: parseInt(tableId),
            sellables: cart.map(item => ({
                id: item.id,
                quantity: item.quantity
            }))
        };

        // Invio i dati al backend
        axios.post(`${api}/api/orders`, payload)
            .then(() => {
                setCart([]);
                setShowCartModal(false);
                setShowSuccessModal(true);
            })
            .catch((err) => {
                console.error(err);
                alert("Errore nell'invio dell'ordine.");
            });
    };

    // Caricamento
    if (sellables.length === 0)
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-warning me-2" role="status"></div>
                <p className="fs-4 text-light mt-3">Caricamento...</p>
            </div>
        );

    // Raggruppa i prodotti per categoria
    const productsByCategory = sellables.reduce((acc, item) => {

        const category = item.category.name;

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(item);

        return acc;

    }, {});

    // Calcolo numero totale prodotti nel carrello
    const cartCount = cart.reduce((sum, item) => {
        return sum + item.quantity; 
    }, 0);

    // Calcola il prezzo totale del carrello
    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity; 
    }, 0);

    return (
        <>

            <div className="container py-4">
                <nav className='d-flex justify-content-center'>
                    <img className="mt-2" src="/img/buvette-logo-tagliato.png" alt="Logo" height="150" />
                </nav>

                <h1 className="my-5 text-center">Lasciatevi ispirare dal nostro menù!</h1>

                <div className="accordion" id="menuAccordion">
                    {Object.entries(productsByCategory).map(([categoryName, items], index) => (
                        <div className="accordion-item" key={categoryName}>
                            <h2 className="accordion-header" id={`heading-${index}`}>
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse-${index}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse-${index}`}
                                >
                                    {categoryName}
                                </button>
                            </h2>
                            <div
                                id={`collapse-${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading-${index}`}
                                data-bs-parent="#menuAccordion"
                            >
                                <div className="accordion-body">
                                    <div className="row g-4">
                                        {items.map((item) => (
                                            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                                <SellableCard sellable={item} onAddToCart={handleAddToCart} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="btn cart-btn position-fixed bottom-0 end-0 m-4"
                    onClick={() => setShowCartModal(true)}
                >
                    Carrello <FontAwesomeIcon icon={faCartShopping} /> ({cartCount})
                </button>
            </div>

            {/* Modale Carrello */}
            <CartModal
                show={showCartModal}
                cart={cart}
                onClose={() => setShowCartModal(false)}
                onSubmit={handleSubmit}
                onRemove={handleRemoveFromCart}
            />

            {/* Modale invio ordine */}
            <SuccessModal
                show={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
            />

        </>
    )
}

export default OrderPage;