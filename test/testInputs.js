'use strict'

var difi = require('../index')
var tap = require('tap')

tap.test('Requires dataset to be specified', function (test) {
  var options = {
    'format': 'json'
  }
  var expectedErrorMessage = 'Missing required param: dataset'
  difi(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires format to be specified', function (test) {
  var options = {
    'dataset': 'brreg/enhetsregisteret'
  }
  var expectedErrorMessage = 'Missing required param: format'
  difi(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires valid format type', function (test) {
  var options = {
    'dataset': 'brreg/enhetsregisteret',
    'format': 'cucumber'
  }
  var expectedErrorMessage = 'Illegal format requested'
  difi(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires query object', function (test) {
  var options = {
    'dataset': 'brreg/enhetsregisteret',
    'format': 'json'
  }
  var expectedErrorMessage = 'Missing required param: query'
  difi(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Returns error message if dataset not found', function (test) {
  var options = {
    'dataset': 'npmlovesyou',
    'format': 'json',
    'query': {
      query: 'doyoulovenpm'
    }
  }
  var expectedErrorMessage = 'Dataset or folder not found.'
  difi(options, function (error, data) {
    tap.equal(data.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
