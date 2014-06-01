'use strict';

var difi = require('../index')
  , assert = require('assert')
  , opts = {
      dataset: 'brreg/enhetsregisteret',
      query: {
        query:'Pythonia'
      }
    };

describe('Difi - formats', function(){

  it('Should have a length of 572 if format is csv', function(done){
    opts.format = 'csv';
    difi(opts, function(err, data){
      assert.equal(data.length, 572);
      done();
    });
  });

  it('Should have a length of 616 if format is json', function(done){
    opts.format = 'json';
    difi(opts, function(err, data){
      assert.equal(data.length, 616);
      done();
    });
  });

  it('Should have a length of 627 if format is jsonp', function(done){
    opts.format = 'jsonp';
    difi(opts, function(err, data){
      assert.equal(data.length, 627);
      done();
    });
  });

  it('Should have a length of 1380 if format is xml', function(done){
    opts.format = 'xml';
    difi(opts, function(err, data){
      assert.equal(data.length, 1380);
      done();
    });
  });

  it('Should have a length of 589 if format is yaml', function(done){
    opts.format = 'yaml';
    difi(opts, function(err, data){
      assert.equal(data.length, 589);
      done();
    });
  });

});