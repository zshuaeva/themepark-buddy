const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = 3001;

app.use(express.json());


const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET',
};

app.use(cors(corsOptions));

app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://queue-times.com/parks/16/queue_times.json');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
