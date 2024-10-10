import React, { useEffect, useState } from 'react';

const OrderSummary = () => {
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        const fetchOrderData = async () => {
            const response = await fetch('https://samcart-lulu.netlify.app/.netlify/functions/process-order');
            const data = await response.json();
            setOrderData(data);
            console.log(orderData);
        };

        // Fetch data every 5 seconds
        const intervalId = setInterval(fetchOrderData, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [orderData]);

    return (
        <div>
            {orderData ? (
                <div>
                    <h2>Order Summary</h2>
                    <p>Order ID: {orderData.orderId}</p>
                    <p>Total Amount: {orderData.totalAmount}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default OrderSummary;
