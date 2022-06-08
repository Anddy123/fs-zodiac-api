const { Router } = require('express');

const { zodiacs } = require('../../data/zodiacs');

module.exports = Router()
  .get('/:id', (req, res) => {
    const { id } = req.params;
    const zodiac = zodiacs.find(z => z.id === id);
    res.send(zodiac);
  })

  .get('/', (req, res) => {
    const newZodiacs = zodiacs.map(zodiac => {
      const { id, name, symbol } = zodiac;
      return { id, name, symbol };
    });
    res.json(newZodiacs);
  });
