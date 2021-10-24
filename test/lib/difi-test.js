'use strict'

const tap = require('tap')
const difi = require('../../index')

tap.test('Requires dataset to be specified', (test) => {
  const options = {
    format: 'json'
  }
  const expectedErrorMessage = 'Missing required param: dataset'
  difi(options)
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.end()
    })
})

tap.test('Requires format to be specified', (test) => {
  const options = {
    dataset: 'brreg/enhetsregisteret'
  }
  const expectedErrorMessage = 'Missing required param: format'
  difi(options)
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.end()
    })
})

tap.test('Requires valid format type', (test) => {
  const options = {
    dataset: 'brreg/enhetsregisteret',
    format: 'cucumber'
  }
  const expectedErrorMessage = 'Illegal format requested'
  difi(options)
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.end()
    })
})

tap.test('Requires query object', (test) => {
  const options = {
    dataset: 'brreg/enhetsregisteret',
    format: 'json'
  }
  const expectedErrorMessage = 'Missing required param: query'
  difi(options)
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.end()
    })
})

tap.test('Returns error message if dataset not found', (test) => {
  const options = {
    dataset: 'npmlovesyou',
    format: 'json',
    query: {
      query: 'doyoulovenpm'
    }
  }
  const expectedErrorMessage = 'Dataset or folder not found.'
  difi(options)
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.end()
    })
})

tap.test('Returns json if format is json', (test) => {
  const options = {
    dataset: 'brreg/enhetsregisteret',
    format: 'json',
    query: {
      query: '994528130'
    }
  }
  difi(options)
    .then((data) => {
      tap.equal(data.entries[0].orgnr, '994528130', 'Expected data returned from json')
      test.end()
    })
    .catch((error) => {
      throw error
    })
})
