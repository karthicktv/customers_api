var request = require('supertest');
var should  = require('chai').should();

describe('Test for /user api', function() {
  var createdModel;

  it('should create a user', function(done) {
    request(sails.hooks.http.app)
      .post('/user')
      .send(
        {
          first_name: 'foo',
          last_name:  'bar',
          birth_date: '05-10-1982'
        }
      )
      .expect(201)
      .end(function(err, res) {
        var reply = res.body;
        createdModel = reply;
        should.not.exist(err);
        reply.first_name.should.equal('foo');

        User.findOne(createdModel.id, function(err, result) {
          should.not.exist(err);
          should.exist(result);
          reply.first_name.should.equal('foo');
          done();
        });
      });
  });

  it('should find all user', function(done) {
    request(sails.hooks.http.app)
      .get('/user')
      .expect(200)
      .end(function(err, res) {
        var reply = res.body;
        should.not.exist(err);
        reply.length.should.be.above(0);
        done();
      });
  });

  it('should find a user', function(done) {
    request(sails.hooks.http.app)
      .get('/user/'+createdModel.id)
      .expect(200)
      .end(function(err, res) {
        var reply = res.body;
        should.not.exist(err);
        reply.id.should.equal(createdModel.id);
        done();
      });
  });

  it('should find a user with a joke', function(done) {
    request(sails.hooks.http.app)
      .get('/user/joke/'+createdModel.id)
      .expect(200)
      .end(function(err, res) {
        var reply = res.body;
        should.not.exist(err);
        reply.id.should.equal(createdModel.id);
        reply.joke.should.be.an('string');
        done();
      });
  });

  it('should update a user', function(done) {
    request(sails.hooks.http.app)
      .put('/user/'+createdModel.id)
      .send(
        {
          first_name: 'foo2'
        }
      )
      .expect(200)
      .end(function(err, res) {
        var reply = res.body;
        should.not.exist(err);
        reply.first_name.should.equal('foo2');

        User.findOne(createdModel.id, function(err, result) {
          should.not.exist(err);
          should.exist(result);
          reply.first_name.should.equal('foo2');
          done();
        });
      });
  });

  it('should delete a user', function(done) {
    request(sails.hooks.http.app)
      .delete('/user/'+createdModel.id)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        res.body.id.should.equal(createdModel.id);

        User.findOne(createdModel.id, function(err, result) {
          should.not.exist(err);
          should.not.exist(result);
          done();
        });
      });
  });

});

