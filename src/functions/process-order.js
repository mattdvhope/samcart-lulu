exports.handler = async (event, context) => {
    // Handle preflight request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers: {
                'Access-Control-Allow-Origin': '*', // Change this to your specific origin for production
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
            },
        };
    }

    // Parse the request body
    let orderId;
    let totalAmount;

    try {
        const body = JSON.parse(event.body);
        orderId = body.orderId;
        totalAmount = body.totalAmount;
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid request body' }),
        };
    }

    // Handle your order processing logic here...

    // Return response with CORS headers
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*', // Change this to your specific origin for production
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
        },
        body: JSON.stringify({ message: 'Order processed successfully', orderId, totalAmount }),
    };
};
