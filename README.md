# Email Sender Backend

This Node.js backend application allows you to send emails using an API. It uses NodeMailer for email handling.
The backend service for this project can be accessed at https://learnlingo-email-sender-backend.onrender.com

## Prerequisites

- Node.js installed on your machine
- NPM (Node Package Manager) installed

## Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/GGalina/LearnLingo-email-sender-backend.git
```

2. Navigate to the project directory.

```bash
cd email-sender-backend
```

3. Install dependencies.

```bash
npm install
```

## Configuration

Create a .env file with your configuration setting

```javascript
SENDGRID_API_KEY='YOUR-SENDGRID-API-KEY'
SENDGRID_FROM='YOUR-FROM-EMAIL'
SENDGRID_TO='YOUR-TO-EMAIL'
```

## Usage

Start the server.

```bash
npm start
```
The server will be running at http://localhost:3000 by default.

## API Endpoints
### Send Email
- URL: /send-email
- Method: POST
- Headers:
 -- Content-Type: application/json
- Body:

```json
{
  "name": "John Smith",
  "email": "smith@example.com",
  "phone": "+380654567890",
  "reason": "Culture, travel or hobby"
}
```

Make a POST request to /send-email with the necessary details in the request body to send an email.