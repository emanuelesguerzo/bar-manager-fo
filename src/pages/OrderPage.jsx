import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SellableCard from '../components/SellableCard';

const api = import.meta.env.VITE_API_URL;

function OrderPage() {
    const { tableId } = useParams();
    const [sellables, setSellables] = useState([]);

    useEffect(() => {
        axios.get(`${api}/api/sellables`).then((res) => {
            setSellables(res.data.data);
        })
            .catch((err) => {
                console.error('Errore nel caricamento:', err);
                setSellables([]);
            });
    }, []);

    if (sellables.length === 0)
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary me-2" role="status"></div>
                <p className="fs-4 mt-3">Caricamento...</p>
            </div>
        );

    return (
        <div className="container py-4">
            <h2 className="mb-4 text-center">Ordina dal tavolo {tableId}</h2>
            <div className="row g-4">
                {sellables.map((item) => (
                    <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <SellableCard sellable={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrderPage