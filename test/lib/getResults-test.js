'use strict'

const tap = require('tap')
const getResults = require('../../lib/getResults')

tap.test('getResults should catch errors', function (test) {
  var options = {
    apiUrl: 'http://yabendabenduhuusnippelapp.no',
    qs: {
      query: '994528130'
    }
  }
  getResults(options, function (error, data) {
    tap.ok(error, 'Error exists')
    test.done()
  })
})

tap.test('Returns error message if dataset not found', function (test) {
  var options = {
    'apiUrl': 'https://hotell.difi.no/api/json/npmlovesyou',
    'qs': {
      query: 'doyoulovenpm'
    }
  }
  var expectedErrorMessage = 'Dataset or folder not found.'
  getResults(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
