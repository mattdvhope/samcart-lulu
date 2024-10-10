exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers: {
                'Access-Control-Allow-Origin': 'https://soaw.samcart.com',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
            },
        };
    }

    try {
        const { orderId, totalAmount } = JSON.parse(event.body);
        
        // Your order processing logic goes here

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'https://soaw.samcart.com',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
            },
            body: JSON.stringify({ message: 'Order processed successfully', orderId, totalAmount }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error', error: error.message }),
        };
    }
};
