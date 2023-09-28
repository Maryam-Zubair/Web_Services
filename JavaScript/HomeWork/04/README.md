# My Node.js HTTPS Server

This repository contains code for setting up a Node.js HTTPS server using Express.

## Usage

1. Clone this repository to your local machine.
2. Install the required dependencies using:

   ```bash
   npm install

Generate SSL key and certificate and save them as key.pem and cert.pem in the root directory.
Run the server using: node index.js
Access the server at https://localhost:8080 in your browser.


## File Structure

- `app.js`: Main application file setting up the HTTPS server.
- `routes/`: Folder containing custom route handlers.
  - `alive.js`: Handler for the '/alive' route.
  - `getDevice.js`: Handler for the '/get-device' route.
  - `getIp.js`: Handler for the '/get-ip' route.
  - `getUser.js`: Handler for the '/get-user' route.
  - `startup.js`: Handler for the root route ('/').
