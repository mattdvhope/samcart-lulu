// src/functions/process-order.js
exports.handler = async (event) => {
    
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }

    const data = JSON.parse(event.body);
    console.log('Received order summary:', data);

    // Your logic to process the order summary
    // e.g., saving to a database or triggering other actions

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://soaw.samcart.com',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
        },
        body: JSON.stringify({ message: "Order summary received successfully!" }),
    };
};
