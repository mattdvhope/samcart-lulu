// netlify/functions/process-order.js
// import createPrintJob from '../src/utils/createPrintJob';
import listPrintJobs from '../src/utils/listPrintJobs';

// Define common headers for CORS
const commonHeaders = {
    'Access-Control-Allow-Origin': 'https://soaw.samcart.com',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Credentials': true,
};

// Helper function for building the response
const buildResponse = (statusCode, body) => ({
    statusCode,
    headers: commonHeaders,
    body: JSON.stringify(body),
});

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return buildResponse(204, {}); // No body needed for OPTIONS
    }

    try {
        const parsedBody = JSON.parse(event.body);
        const orderSummary = parsedBody.orderSummary;
        
        console.log('Order Summary:', orderSummary);
        console.log('Order Summary ID:', orderSummary.id);

        // Immediately invoke createPrintJob with the order summary
        // await createPrintJob(orderSummary);
        await listPrintJobs();




        return buildResponse(200, { message: 'Order processed successfully', orderId: orderSummary.id });
    } catch (error) {
        return buildResponse(500, { message: 'Internal Server Error', error: error.message });
    }
};
