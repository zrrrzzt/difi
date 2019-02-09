'use strict'

const getResults = require('./lib/get-results')
const validFormats = ['csv', 'json', 'jsonp', 'xml', 'yaml']
const apiUrl = 'https://hotell.difi.no/api'

module.exports = function (opts, callback) {
  return new Promise(async (resolve, reject) => {
    // let results = ''
    if (!opts.dataset) {
      reject(new Error('Missing required param: dataset'))
    }

    if (!opts.format) {
      reject(new Error('Missing required param: format'))
    }

    if (validFormats.indexOf(opts.format) < 0) {
      reject(new Error('Illegal format requested'))
    }

    if (!opts.query) {
      reject(new Error('Missing required param: query'))
    }

    const uri = `${apiUrl}/${opts.format}/${opts.dataset}`

    try {
      const data = await getResults({ apiUrl: uri, qs: opts.query })
      // results = opts.format === 'json' ? JSON.parse(data.toString()) : data.toString()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}
