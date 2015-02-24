'use strict';

var difi = require('../index')
  , assert = require('assert')
  ;

describe('Difi - inputs', function(){

  it('Should throw if dataset is not specified', function(done){
    var opts = {'format':'json'};
    difi(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
      }, function(err){
        if((err instanceof Error) && /Missing required param: dataset/.test(err)){
          return true
        }
      },
      "Unexpected error"
      );
      done();
    });
  });

  it('Should throw if format is not specified', function(done){
    var opts = {'dataset':'brreg/enhetsregisteret'};
    difi(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: format/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });
  });

  it('Should throw if format is wrong type', function(done){
    var opts = {'dataset':'brreg/enhetsregisteret', format:'cucumber'};
    difi(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Illegal format requested/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });
  });

  it('Should throw if query is not specified', function(done){
    var opts = {'dataset':'brreg/enhetsregisteret', format:'json'};
    difi(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: query/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });
  });

  it('Should return a message if dataset is not found', function(done){
    var opts = {dataset:'npmlovesyou', format:'json', query:{query:'doyoulovenpm'}};
    difi(opts, function(err, data){
      if(err) throw err;
      assert.equal(data.message, 'Dataset or folder not found.');
      done();
    });
  });

});