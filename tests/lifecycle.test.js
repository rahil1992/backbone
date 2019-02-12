var sails = require('sails');
before(function(done){
  this.timeout(5000);
  sails.lift({
    hooks: {grunt: false},
    log: {level: 'warn'}
  },error=>{
    if(error) return done(error);
    return done();
  });
});

after(done => {
  sails.lower(done)
});
