var fixture = require('../../fixtures/controllers/auth.fixture');
var supertest = require('supertest');
describe('AuthController.register',() =>{
  describe('#register()', () => {
    it("should register user", (done) => {
      supertest(sails.hooks.http.app)
        .post('/auth/register')
        .send(fixture.newUserValid)
        .expect(200)
        .end(done);
    })
  })
});
