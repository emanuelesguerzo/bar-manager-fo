import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const api = import.meta.env.VITE_API_URL;

function OrderPage() {
    const { tableId } = useParams();
    const {sellables, setSellables} = useState();

    useEffect(() => {
        axios.get(``)
    })

    

    return (
        <div>
            <h2>Ordina tavolo {tableId}</h2>
        </div>
    )
}

export default OrderPage