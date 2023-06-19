const express = require('express');
const app = express();

// Importer les routes
const app1 = require('./Routes/route');

// Utiliser les routes
app.use('/api', app1); // Préfixe '/api' pour toutes les routes des blagues

// Démarrage du serveur
app.listen(3000, () => {
  console.log('API de blagues démarrée sur le port 3000');
});