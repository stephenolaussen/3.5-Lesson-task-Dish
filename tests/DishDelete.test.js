const app = require('../app');
const request = require('supertest');
const db = require('../models');

describe('DELETE /dishes', () => {

    // Before running the tests, ensure the database is synced and a test dish is created
    beforeAll(async () => {
        await db.sequelize.sync({ force: false });
        // Create a dish to be deleted in the tests
        const response = await request(app)
          .post('/dishes')
          .send({ Name: 'Taco', Country: 'Mexico' }); 
          console.log('Test dish created', response.body);
    });
    
  it('should delete a dish by name', async () => {
    // Send a DELETE request to the endpoint
    const response = await request(app)
      .delete('/dishes')
      .send({ Name: 'Taco' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Dish deleted successfully' });
  });

  it('should return an error if dish name is not provided', async () => {
    // Send a DELETE request without providing the dish name
    const response = await request(app)
      .delete('/dishes')
      .send({});
      
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error');
  });
  afterAll(async () => {
      await db.sequelize.close();
  });
});