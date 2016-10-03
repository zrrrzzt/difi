'use strict'

const getResults = require('./lib/getResults')
const validFormats = ['csv', 'json', 'jsonp', 'xml', 'yaml']
const apiUrl = 'https://hotell.difi.no/api'
var results = ''

module.exports = function (opts, callback) {
  if (!opts.dataset) {
    return callback(new Error('Missing required param: dataset'), null)
  }

  if (!opts.format) {
    return callback(new Error('Missing required param: format'), null)
  }

  if (validFormats.indexOf(opts.format) < 0) {
    return callback(new Error('Illegal format requested'), null)
  }

  if (!opts.query) {
    return callback(new Error('Missing required param: query'), null)
  }

  const uri = `${apiUrl}/${opts.format}/${opts.dataset}`

  getResults({apiUrl: uri, qs: opts.query}, function (error, data) {
    if (error) {
      return callback(error, null)
    }
    results = opts.format === 'json' ? JSON.parse(data.toString()) : data.toString()
    return callback(null, results)
  })
}
