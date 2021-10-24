'use strict'

const tap = require('tap')
const getResults = require('../../lib/get-results')

tap.test('getResults should catch errors', async test => {
  const options = {
    apiUrl: 'http://yabendabenduhuusnippelapp.no',
    qs: {
      query: '994528130'
    }
  }

  await getResults(options)
    .then(console.log)
    .catch(error => {
      tap.ok(error, 'Error exists')
      test.end()
    })
})

tap.test('Returns error message if dataset not found', async test => {
  const options = {
    apiUrl: 'https://hotell.difi.no/api/json/npmlovesyou',
    qs: {
      query: 'doyoulovenpm'
    }
  }
  const expectedErrorMessage = 'Dataset or folder not found.'

  await getResults(options)
    .then(console.log)
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.end()
    })
})
