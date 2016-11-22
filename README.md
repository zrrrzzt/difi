[![Build Status](https://travis-ci.org/zrrrzzt/difi.svg?branch=master)](https://travis-ci.org/zrrrzzt/difi)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/difi/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/difi?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# difi

Node.js module for querying the [hotell.difi.no API](http://hotell.difi.no/api).

## Installation

```sh
$ npm install difi --save
```

## Usage

Pass an object with the required properties and receive the result.

**dataset** The [dataset](http://hotell.difi.no/) you want to query.

**format** Format for the result. Can be csv, json, jsonp, xml or yaml

**query** Object with properties for querystring. Find all options in the [API description](http://hotell.difi.no/api)

### Promises

```JavaScript
const difi = require('difi')
const options = {
      dataset:'brreg/enhetsregisteret',
      format: 'json',
      query: {
        query:'Pythonia'
      }
}

difi(options)
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
```

### Callback

```JavaScript
const difi = require('difi')
const options = {
      dataset:'brreg/enhetsregisteret',
      format: 'json',
      query: {
        query:'Pythonia'
      }
}

difi(options, (error, data) => {
  if (error) {
    console.error(error)
  }
  console.log(data)
})
```

## Related

- [difi-cli](https://github.com/zrrrzzt/difi-cli) CLI for this module
