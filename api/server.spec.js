const server = require('./server.js');
const request = require('supertest');
const db = require('../data/dbConfig');
const Videogames = require('./serverModel');

describe('server runs testing', () => {
   it('should set test environment', () => {
      expect(process.env.DB_ENV).toBe('testing');
   })
})

describe('GET /games', () => {
   afterEach(async () => {
      await db('videogames').truncate();
   });

   it('should return status 200', async () => {
      const res = await request(server).get('/games');
      expect(res.status).toBe(200);
   })

   it('should return array', async () => {
      const res = await request(server).get('/games');
      expect(res.body).toEqual([]);
   })

   xit('should return test data', async () => {
      const res = await request(server).get('/games');
      const testData = {
         title: 'Pacman',
         genre: 'Arcade',
         releaseYear: 1980
      }
      expect(res.body).toEqual(testData)
   })
})

describe('POST /games', () => {
   afterEach(async () => {
      await db('videogames').truncate();
   });

   it('should return status 201 when data correct', async () => {

   })

   it('should return status 422 when data incorrect', async () => {

   })

   it('should insert videogame', async () => {

   })
})