'use strict'

const getResults = require('./lib/getResults')
const validFormats = ['csv', 'json', 'jsonp', 'xml', 'yaml']
const apiUrl = 'https://hotell.difi.no/api'
var results = ''

module.exports = function (opts, callback) {
  return new Promise((resolve, reject) => {
    if (!opts.dataset) {
      let error = new Error('Missing required param: dataset')
      if (callback) {
        return callback(error, null)
      }
      reject(error)
    }

    if (!opts.format) {
      let error = new Error('Missing required param: format')
      if (callback) {
        return callback(error, null)
      }
      reject(error)
    }

    if (validFormats.indexOf(opts.format) < 0) {
      let error = new Error('Illegal format requested')
      if (callback) {
        return callback(error, null)
      }
      reject(error)
    }

    if (!opts.query) {
      let error = new Error('Missing required param: query')
      if (callback) {
        return callback(error, null)
      }
      reject(error)
    }

    const uri = `${apiUrl}/${opts.format}/${opts.dataset}`

    getResults({apiUrl: uri, qs: opts.query}, (error, data) => {
      if (error) {
        if (callback) {
          return callback(error, null)
        }
        reject(error)
      } else {
        results = opts.format === 'json' ? JSON.parse(data.toString()) : data.toString()
        if (callback) {
          return callback(null, results)
        }
        resolve(results)
      }
    })
  })
}
