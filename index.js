'use strict'

const getResults = require('./lib/get-results')
const validFormats = ['csv', 'json', 'jsonp', 'xml', 'yaml']
const apiUrl = 'https://hotell.difi.no/api'

module.exports = async options => {
  if (!options.dataset) {
    throw new Error('Missing required param: dataset')
  }

  if (!options.format) {
    throw new Error('Missing required param: format')
  }

  if (validFormats.indexOf(options.format) < 0) {
    throw new Error('Illegal format requested')
  }

  if (!options.query) {
    throw new Error('Missing required param: query')
  }

  const uri = `${apiUrl}/${options.format}/${options.dataset}`

  const data = await getResults({ apiUrl: uri, qs: options.query })
  return data
}
