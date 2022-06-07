const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../data/zodiacs');

describe('fs-zodic-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiacs responds with an array of zodiacs', async () => {
    const res = await request(app).get('/api/zodiacs');
    const expected = zodiacs;
    expect(res.body).toEqual(expected);
  });

  afterAll(() => { 
    pool.end();
  });
});
