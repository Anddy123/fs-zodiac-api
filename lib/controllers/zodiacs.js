const { Router } = require('express');

const { zodiacs } = require('../../data/zodiacs');

module.exports = Router()
  .get('/', (req, res) => {
    const newZodiacs = zodiacs.map((zodiac) => {
      const { id, name, dates, symbol } = zodiac;
      return { id, name, dates, symbol };
    });
    res.json(newZodiacs);
  });
