
  const blaguesData=require('./BD/blague');

app.get('/blagues/random', (req, res) => {
    const randomBlague = blaguesData[Math.floor(Math.random() * blaguesData.length)];
    res.json(randomBlague);
  });
  
  app.get('/allblagues', (req, res) => {
    res.json(blaguesData);
  });
  
  app.get('/blagues/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const blague = blaguesData.find(b => b.id === id);
    
    if (blague) {
      res.json({ blague });
    } else {
      res.status(404).json({ message: 'Blague non trouvée' });
    }
  });





