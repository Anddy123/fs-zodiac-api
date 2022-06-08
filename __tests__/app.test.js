const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('fs-zodic-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiacs responds with an array of zodiacs', async () => {
    const res = await request(app).get('/api/zodiacs');
    const expected = [
      {
        'id': '1',
        'name': 'aquarius',
        'symbol': 'Water Bearer'
      },
      {
        'id': '2',
        'name': 'aries',
        'symbol': 'Ram'
      },
      {
        'id': '3',
        'name': 'cancer',
        'symbol': 'Crab'
      },
      {
        'id': '4',
        'name': 'capricorn',
        'symbol': 'Goat'
      },
      {
        'id': '5',
        'name': 'gemini',
        'symbol': 'Twins'
      },
      {
        'id': '6',
        'name': 'leo',
        'symbol': 'Lion'
      },
      {
        'id': '7',
        'name': 'libra',
        'symbol': 'Balance'
      },
      {
        'id': '8',
        'name': 'pisces',
        'symbol': 'Fish'
      },
      {
        'id': '9',
        'name': 'sagittarius',
        'symbol': 'Archer'
      },
      {
        'id': '10',
        'name': 'scorpio',
        'symbol': 'Scorpion'
      },
      {
        'id': '11',
        'name': 'taurus',
        'symbol': 'Bull'
      },
      {
        'id': '12',
        'name': 'virgo',
        'symbol': 'Virgin'
      }
    ];
    expect(res.body).toEqual(expected);
  });

  it('/zodiacs responds with an array of zodiacs', async () => {
    const res = await request(app).get('/api/zodiacs/1');
    const expected = { 
      id:'1', 
      name:'aquarius', 
      dates:'Jan 21 - Feb 19', 
      symbol:'Water Bearer' 
    };
    expect(res.body).toEqual(expected);
  });
  afterAll(() => { 
    pool.end();
  });
});
