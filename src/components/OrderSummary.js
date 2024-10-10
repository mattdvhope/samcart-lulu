import React, { useEffect, useState } from 'react';

const OrderSummary = () => {
    const [orderData, setOrderData] = useState(null);
    const [lastOrderId, setLastOrderId] = useState(null);

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const response = await fetch('https://samcart-lulu.netlify.app/.netlify/functions/process-order');
                
                // Check if the response is okay
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                // Check if the order ID has changed
                if (data.orderId !== lastOrderId) {
                    setOrderData(data);
                    setLastOrderId(data.orderId); // Update last order ID
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        // Fetch data every 5 seconds
        const intervalId = setInterval(fetchOrderData, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [lastOrderId]); // Add lastOrderId to dependency array

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
