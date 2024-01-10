# MyChat - Real-Time Chat Application

MyChat is a simple real-time chat application built using Node.js, Express, and Socket.io. It allows users to send and receive messages in real-time.

## Features

- Real-time chat using WebSocket with Socket.io.
- Server-Sent Events (SSE) for real-time updates.
- Simple routes for testing purposes.
- Responsive and clean user interface.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

Navigate to the project directory: cd mychat

Install dependencies: npm install

  Usage:
 1. Start the server: node server.js

 2. Open a web browser and go to http://localhost:3000 to access the chat application.

 3. Open multiple tabs or browsers to simulate multiple users and start chatting in real-time.

  Routes:
 1. /: Responds with a plain text message "hi".

 2. /json: Responds with a JSON object containing a text property set to "hi" and a numbers property set to an array [1, 2, 3]. 

 3. /echo: Echoes back the input query parameter in various formats (normal, shouty, character count, and backwards). 

 4. /sse: Establishes a Server-Sent Events (SSE) connection and sends real-time messages.

Check the Chat Application
To test the real-time functionality:

Submit a Message:

In one of the tabs (http://localhost:3000/chat.html) or browsers, type a message in the input field and press "Send" or press Enter. 

Observe Real-Time Updates:

On the same tab where you submitted the message, check if the message appears in the chat area immediately after you submit it.

Check Other Tabs or Browsers:

Switch to the other open tabs or browsers.

Observe if the message you sent appears in real-time on these tabs without manually refreshing the page.
Check SSE Endpoint:

Open a new tab or browser.

Navigate to http://localhost:3000/sse.
Observe if real-time messages are received from the server.
