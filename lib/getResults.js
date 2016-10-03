'use strict'

module.exports = (options, callback) => {
  const apiEndpoint = options.apiUrl
  const protocol = /https/.test(apiEndpoint) ? 'https' : 'http'
  const http = require(protocol)
  const querystring = require('querystring')
  const url = `${apiEndpoint}?${querystring.stringify(options.qs)}`
  var body = ''

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
