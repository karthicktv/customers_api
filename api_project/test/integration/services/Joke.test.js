describe('Test for Joke Service', function () {

  it('should return a joke', function (done) {
    Joke.fetchJoke()
      .then(function (joke) {
        joke.should.be.an('string');
        done();
      })
      .catch(done);
  });
  
});
