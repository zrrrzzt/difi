'use strict';

var request = require('request');
var util = require('util');
var validFormats = ['csv', 'json', 'jsonp', 'xml', 'yaml'];
var apiUrl = 'http://hotell.difi.no/api';
var data = '';

module.exports = function(opts, callback) {

  if (!opts.dataset) {
    return callback(new Error('Missing required param: dataset'), null);
  }

  if (!opts.format) {
    return callback(new Error('Missing required param: format'), null);
  }

  if (validFormats.indexOf(opts.format) < 0) {
    return callback(new Error('Illegal format requested'), null);
  }

  if (!opts.query) {
    return callback(new Error('Missing required param: query'), null);
  }

  var uri = util.format('%s/%s/%s', apiUrl, opts.format, opts.dataset);

  request(uri, {qs:opts.query}, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }
    data = opts.format === 'json' ? JSON.parse(body.toString()) : body.toString();
    return callback(null, data);
  });

};
