
# Order Tracking System
The Order Tracking System is a Node.js application that allows users to track orders by providing an order number. This system retrieves tracking details from a predefined list and an external API provided by DHL.

## Overview
The Order Tracking System is a lightweight application built with Express.js and uses the DHL API to fetch real-time tracking information. Users can submit an order number, and the system returns key tracking details, including the origin, destination, and status of the order.

## Documentation

## Using the API

#### Endpoint

To track an order, make a **POST** request to the following endpoint:

**POST /track**

- Application URL: https://localhost:8000/track

#### Request Format

The request should include a JSON object in the request body with the following format:

```json
{
  "orderNum": "order-number"
}
  
Replacing the "order-number" in request body with actual order number
### Expected Response Format

The API will respond with a JSON object containing the tracking details, including:

- `origin`: The origin of the order.
- `dest`: The destination of the order.
- `status`: The current status of the order.

**Example response:**

```json
{
    "stat": "delivered",
    "desc": "THE SHIPMENT HAS BEEN SUCCESSFULLY DELIVERED",
    "time": "2023-08-04T13:49:37",
    "origin": {
        "countryCode": "DE"
    },
    "dest": {
        "countryCode": "DE"
    }
}

## Environment Variables

To set up the environment for the Order Tracking System, follow these steps:

1. Create a `.env` file in the project directory.

2. Add your DHL API key to the `.env` file as follows:

   ```makefile
   DHL_API_Key=your-api-key

## Status Codes

- `200 OK`: The request was successful, and tracking details are returned.

- `400 Bad Request`: The request format is incorrect or missing data.

- `404 Not Found`: No tracking information is found for the provided order number.

- `500 Internal Server Error`: An error occurred while fetching tracking details.


## Code Files

### `main.js`

The `main.js` file serves as the main entry point for the application. It includes the following:

- Configuration for using HTTPS with SSL certificates.
- Setup of the Express.js application.
- Loading environment variables from a `.env` file.
- Initialization of routes using the `/track` endpoint for order tracking.

### `trackingapi.js`

The `trackingapi.js` file contains the code responsible for interacting with the DHL API. It includes:

- Usage of the Axios library for making HTTP requests.
- Retrieval of tracking details from the DHL API using a provided tracking ID and API key.
- Handling of API responses and errors.

### `trackinginfo.js`

The `trackinginfo.js` file defines the tracking information used by the system. It includes:

- A predefined list of order tracking information, each with an order number and tracking number.
- A function to find tracking information based on the provided order number.
