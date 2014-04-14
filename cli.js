#!/usr/bin/env node
'use strict';

var difi = require('./index')
  , argv = require('minimist')((process.argv.slice(2)))
  , opts = {
      dataset: argv.dataset,
      format: argv.format,
      query: {
        query:argv.query
      }
    };

function printHelp(){
  console.log('Usage:');
  console.log('difi --dataset=id-of-dataset --format=format-of-return --query=value-of-query');
}

if (argv.help){
  return printHelp();
}

difi(opts, function(err, data){
  if(err) throw err;
  console.log(data);
})