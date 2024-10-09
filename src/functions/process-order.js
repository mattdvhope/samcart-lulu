// src/functions/process-order.js
exports.handler = async (event) => {
    const data = JSON.parse(event.body);
    console.log('Received order summary:', data);

    // Your logic to process the order summary
    // e.g., saving to a database or triggering other actions

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Order summary received successfully!" }),
    };
};
