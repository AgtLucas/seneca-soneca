require('seneca')()
  .add({ generate: 'id' }, function (message, done) {
    done(null, {
      id: '' + Math.random()
    });
  }
)
.listen();
