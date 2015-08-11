'use strict'

var tap = require('tap')
var difi = require('../index')
var options = {
  dataset: 'brreg/enhetsregisteret',
  query: {
    query: '994528130'
  }
}

tap.test('Should have a length of 626 if format is csv', function (test) {
  options.format = 'csv'
  difi(options, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data.length, 626, 'Expected length OK for csv')
    test.done()
  })
})

tap.test('Returns json if format is json', function (test) {
  options.format = 'json'
  difi(options, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data.entries[0].orgnr, '994528130', 'Expected data returned from json')
    test.done()
  })
})

tap.test('Should have a length of 681 if format is jsonp', function (test) {
  options.format = 'jsonp'
  difi(options, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data.length, 681, 'Expected length OK for jsonp')
    test.done()
  })
})

tap.test('Should have a length of 1494 if format is xml', function (test) {
  options.format = 'xml'
  difi(options, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data.length, 1494, 'Expected length OK for xml')
    test.done()
  })
})

tap.test('Should have a length of 646 if format is yaml', function (test) {
  options.format = 'yaml'
  difi(options, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data.length, 646, 'Expected length OK for yaml')
    test.done()
  })
})
