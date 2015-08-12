'use strict'

function getResults (options, callback) {
  var http = require('http')
  var querystring = require('querystring')
  var apiEndpoint = options.apiUrl
  var body = ''
  var url = apiEndpoint + '?'

  url = url + querystring.stringify(options.qs)

  http.get(url, function (res) {

    res.on('data', function (chunk) {
      body += chunk.toString()
    })

    res.on('end', function () {
      if (/^Error/.test(body.toString()) || /Dataset or folder not found/.test(body.toString())) {
        return callback(new Error('Dataset or folder not found.'))
      } else {
        return callback(null, body)
      }
    })

  }).on('error', function (error) {
    return callback(error, null)
  })

}

module.exports = getResults
