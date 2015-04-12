require('seneca')()
  .client()
  .act( { generate:'id' },
        function( err, result ) {
          console.log(JSON.stringify(result))
        })

require('seneca')()
  .client()
  .act({
    generate: 'id'
  }, function (err, result) {
    console.log(JSON.stringify(result));
  });
