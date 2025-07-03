# Niyaaz Portfolio Bot

An interactive AI-powered chatbot web application that allows users to explore the portfolio, education, skills, projects, and certifications of Mogamat Niyaaz Anthony. The chatbot provides instant, conversational answers to user queries, making it easy to learn about Niyaaz’s background and achievements.

## Demo

- [Live Demo](https://portfolio-chatbot-niyaaz.netlify.app/)

## Features

- **Conversational Chatbot UI:** Users can ask questions about Niyaaz’s journey, skills, education, projects, certifications, and more.
- **AI-Powered Responses:** The chatbot uses an AI backend to generate accurate, context-aware answers based on a structured portfolio.
- **Predefined Suggestions:** Quick-access buttons for common questions.
- **Chat Statistics:** Displays message count and session time.
- **Dark/Light Theme Toggle:** Switch between light and dark modes.
- **Responsive Design:** Modern, mobile-friendly interface.

## How It Works

- The frontend is built with HTML, CSS, and JavaScript.
- When a user sends a message, the app constructs a prompt using the portfolio data and conversation context.
- The prompt is sent to a backend API (`/api/chat`), which uses an AI model (e.g., Cohere or OpenAI) to generate a response.
- The response is displayed in the chat window, and the conversation history is updated.
- The app includes logic for follow-up questions, topic extraction, and dynamic suggestion updates.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **AI Backend:** Cohere AI (or similar, via a Node.js/Express server)
- **Hosting:** Netlify (frontend), Render (backend)
- **Other Tools:** GitHub for source control

## Project Structure

```
Frontend/
  index.html      # Main chatbot UI and logic
server/
  index.js        # Backend API for AI responses
  package.json    # Backend dependencies
```

## Getting Started

1. **Frontend:** Open `Frontend/index.html` in a browser or deploy to Netlify.
2. **Backend:** Run the Node.js server in `server/` (requires Node.js and dependencies from `package.json`).
3. **Connect:** The frontend sends chat requests to the backend API endpoint.

## Source Code

- [Frontend & Backend on GitHub](https://github.com/NiyaazZSB/niyaaz-chatbot-portfolio)
