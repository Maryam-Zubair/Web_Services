
# Order Tracking System

The Order Tracking System is a Node.js application that allows users to track orders by providing an order number. This system retrieves tracking details from a predefined list and an external API provided by DHL.

## Overview

The Order Tracking System is a lightweight application built with Express.js and uses the DHL API to fetch real-time tracking information. Users can submit an order number, and the system returns key tracking details, including the origin, destination, and status of the order.

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

## Getting Started

To run the Order Tracking System locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/order-tracking-system.git
