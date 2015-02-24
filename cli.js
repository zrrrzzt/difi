#!/usr/bin/env node
'use strict';

var difi = require('./index');
var pkg = require('./package.json');
var query = process.argv[2];
var argv = require('minimist')((process.argv.slice(2)));
var opts = {
      dataset: argv.dataset,
      format: argv.format || 'yaml',
      query: {
        query:argv.query
      }
};

function printHelp() {
  console.log(pkg.description);
  console.log('');
  console.log('Usage:');
  console.log('');
  console.log(' $ difi <dataset> --query=<query>');
  console.log('');
  console.log('Optionally pass return format');
  console.log('Available formats: csv, json, jsonp, xml or yaml (default)');
  console.log('');
  console.log(' $ difi <dataset> --query=<query> --format=<format>');
}

if (!query || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  printHelp();
  return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

if (query.indexOf('--') === -1) {
  opts.dataset = argv._[0];
}

difi(opts, function(err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});
