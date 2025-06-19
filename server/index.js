require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await fetch('https://api.cohere.ai/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.COHERE_API_KEY}`
      },
      body: JSON.stringify({
        model: 'command-r-plus',
        message: prompt,
        temperature: 0.2,
        max_tokens: 2000
      })
    });
    const data = await response.json();
    console.log("Cohere response:", data);
    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }
    // Check if the response was cut off due to token limit
    let replyText = data.text || data.reply || 'No response.';
    if (data.finish_reason && data.finish_reason === 'length') {
      replyText += '\n\n[The response was cut off because it reached the maximum token limit of 2000.]';
    }
    res.json({ text: replyText });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: 'Error contacting Cohere API.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
