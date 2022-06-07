const { Router } = require('express');

const { zodiacs } = require('../../data/zodiacs');

module.exports = Router()
  .get('/', (req, res) => {
    const newZodiacs = zodiacs.map(zodiac => {
      const { id, name, symbol } = zodiac;
      return { id, name, symbol };
    });
    res.json(newZodiacs);
  });
