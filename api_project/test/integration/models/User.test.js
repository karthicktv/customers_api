describe('Test for User Model', function() {
  
  it('should create a user', function (done) {
    User.create({
      first_name: 'foo',
      last_name:  'bar',
      birth_date: '05-10-1982'
    })
      .then(function(result) {
        result.first_name.should.equal('foo');
        result.last_name.should.equal('bar');
        result.birth_date.should.be.an('date');
        done();
      })
      .catch(done);
  });

  it('should create second user without date of birth', function (done) {
    User.create({
      first_name: 'test',
      last_name: 'test_last'
    })
      .then(function (result) {
        result.first_name.should.equal('test');
        result.last_name.should.equal('test_last');
        done();
      })
      .catch(done);
  });

  it('should not create a user without first_name', function (done) {
    User.create({
      last_name: 'test_last'
    })
      .then(done)
      .catch(function (error) {
        error.should.not.be.null;
        done();
      });
  });

  it('should not create a user without last_name', function (done) {
    User.create({
      first_name: 'test_first'
    })
      .then(done)
      .catch(function (error) {
        error.should.not.be.null;
        done();
      });
  });

  it('should find all the users', function (done) {
    User.find()
      .then(function (results) {
        results.length.should.equal(2);
        done();
      })
      .catch(done);
  });

  it('should find first user', function (done) {
    User.findOne(1)
      .then(function (result) {
        result.first_name.should.equal('foo');
        result.last_name.should.equal('bar');
        result.birth_date.should.be.an('date');
        done();
      })
      .catch(done);
  });

  it('should find by first_name', function (done) {
    User.find({
      first_name : 'test'
    }).then(function (results) {
      results.length.should.equal(1);
      results[0].first_name.should.equal('test');
      results[0].last_name.should.equal('test_last');
      results[0].birth_date.should.be.an('date');
      done();
    })
      .catch(done);
  });

  it('should update user test with first_name = Chuck and last_name = Norris', function (done) {
    User.update(
      {
        first_name: 'test'
      },
      {
        first_name: 'Chuck',
        last_name: 'Norris'
      }
    ).then(function (results) {
      results.length.should.equal(1);
      results[0].first_name.should.equal('Chuck');
      results[0].last_name.should.equal('Norris');
      done();
    })
      .catch(done);
  });

  it('should find by last_name testing the update to Chuck Norris', function (done) {
    User.find({
      last_name : 'Norris'
    }).then(function (results) {
      results.length.should.equal(1);
      results[0].first_name.should.equal('Chuck');
      results[0].last_name.should.equal('Norris');
      results[0].birth_date.should.be.an('date');
      done();
    })
      .catch(done);
  });

  it('should delete user Chuck Norris', function (done) {
    User.destroy({first_name: 'Chuck'})
      .then(function (results) {
        results.length.should.equal(1);
        results[0].first_name.should.equal('Chuck');
        results[0].last_name.should.equal('Norris');
        results[0].birth_date.should.be.an('date');
        done();
      })
      .catch(done);
  });

  it('should not find Chuck Norris', function (done) {
    User.find({
      last_name : 'Norris'
    }).then(function (results) {
      results.length.should.equal(0);
      done();
    })
      .catch(done);
  });

});
