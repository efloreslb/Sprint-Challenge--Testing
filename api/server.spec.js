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
      const res = await request(server)
         .post('/games')
         .send({ title: 'Pacman', genre: 'Arcade', releaseYear: 1980 })

      expect(res.status).toBe(201);
   })

   it('should return status 422 when data incorrect', async () => {
      const res = await request(server)
         .post('/games')
         .send({ title: 'Pacman', releaseYear: 1980 })

      expect(res.status).toBe(422);
   })

   it('should insert videogame', async () => {
      const res = await request(server)
         .post('/games')
         .send({ title: 'Pacman', genre: 'Arcade', releaseYear: 1980 })

      const videogames = await db('videogames');

      expect(videogames).toHaveLength(1);
      expect(videogames[0].title).toBe('Pacman');
   })
})