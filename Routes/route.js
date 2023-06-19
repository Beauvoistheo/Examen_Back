const express = require('express');
const app1 = express();

const blaguesData = require('../BD/blague');

app1.get('/random', (req, res) => {
  const randomBlague = blaguesData[Math.floor(Math.random() * blaguesData.length)];
  res.json(randomBlague);
});

app1.get('/all', (req, res) => {
  res.json(blaguesData);
});

app1.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const blague = blaguesData.find(b => b.id === id);

  if (blague) {
    res.json(blague);
  } else {
    res.status(404).json({ message: 'Blague non trouvée' });
  }
});


module.exports = app1;




