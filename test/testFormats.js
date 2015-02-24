'use strict';

var difi = require('../index');
var assert = require('assert');
var opts = {
      dataset: 'brreg/enhetsregisteret',
      query: {
        query:'994528130'
      }
};

describe('Difi - formats', function(){

  it('Should have a length of 626 if format is csv', function(done){
    opts.format = 'csv';
    difi(opts, function(err, data){
      assert.equal(data.length, 626);
      done();
    });
  });

  it('returns json if format is json', function(done){
    opts.format = 'json';
    difi(opts, function(err, data){
      assert.equal(data.entries[0].orgnr, '994528130');
      done();
    });
  });

  it('Should have a length of 681 if format is jsonp', function(done){
    opts.format = 'jsonp';
    difi(opts, function(err, data){
      assert.equal(data.length, 681);
      done();
    });
  });

  it('Should have a length of 1494 if format is xml', function(done){
    opts.format = 'xml';
    difi(opts, function(err, data){
      assert.equal(data.length, 1494);
      done();
    });
  });

  it('Should have a length of 646 if format is yaml', function(done){
    opts.format = 'yaml';
    difi(opts, function(err, data){
      assert.equal(data.length, 646);
      done();
    });
  });

});