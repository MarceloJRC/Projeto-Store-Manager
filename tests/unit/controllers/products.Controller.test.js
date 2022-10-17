const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

const app = require('../../../src/app');

const {
  allProducts,
  productById,
} = require('./mock/products.Controller.mock');

describe('Using the method GET in /products', function () {
  it('GET allProducts', async function () {
    const response = await chai
      .request(app)
      .get('/products')
    
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(allProducts)
  });

  it('GET productById', async function () {
    const response = await chai
      .request(app)
      .get('/products/1')
    
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(productById);
  });

  it('GET productById Not Found', async function () {
    const response = await chai
      .request(app)
      .get('/products/500')
    
    expect(response.status).to.be.equal(404);
    expect(response.body).to.be.deep.equal({ message: 'Product not found' });
  });
});