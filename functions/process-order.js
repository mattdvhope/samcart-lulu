exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers: {
                'Access-Control-Allow-Origin': 'https://soaw.samcart.com',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Credentials': true
            },
        };
    }

    try {
        const { orderId, totalAmount } = JSON.parse(event.body);
        
        console.log(`Processing order: ${orderId}, Total Amount: ${totalAmount}`);

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'https://soaw.samcart.com',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Credentials': true
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
