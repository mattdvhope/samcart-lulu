exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers: {
                'Access-Control-Allow-Origin': 'https://soaw.samcart.com',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Credentials': true,
            },
        };
    }

    try {
        const { orderSummary } = JSON.parse(event.body); // Parse the entire orderSummary object

        console.log(`Processing order: ${JSON.stringify(orderSummary)}`);
        console.log(`--------------------`);
        console.log(orderSummary);
        console.log(`--------------------`);

        // You can access specific properties like this:
        const { id: orderId, total_amount: totalAmount } = orderSummary;

        console.log(`Order ID: ${orderId}, Total Amount: ${totalAmount}`);

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'https://soaw.samcart.com',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({ message: 'Order processed successfully', orderSummary }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error', error: error.message }),
        };
    }
};
