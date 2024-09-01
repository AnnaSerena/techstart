const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware CORS
app.use(cors({
  origin: 'http://localhost:4200', // Permet les requêtes depuis ce domaine
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permet ces méthodes HTTP
  allowedHeaders: ['Content-Type', 'Authorization'] // Permet ces en-têtes
}));

// Routes et autres configurations
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from API' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
