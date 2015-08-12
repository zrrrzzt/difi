[![Build Status](https://travis-ci.org/zrrrzzt/difi.svg?branch=master)](https://travis-ci.org/zrrrzzt/difi)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/difi/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/difi?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# difi

Node.js module/CLI app for querying the [hotell.difi.no API](http://hotell.difi.no/api).

## Installation

```
$ npm install difi
```

You can also install it globally to use the CLI version

```
$ npm install difi -g
```

## Test

Make sure you have installed [Mocha](http://visionmedia.github.io/mocha/) globally or go to the difi folder and do an nmp install.

```
$ npm test
```

## Usage - Module

Pass an object with the required properties and receive the result.

**dataset** The [dataset](http://hotell.difi.no/) you want to query.

**format** Format for the result. Can be csv, json, jsonp, xml or yaml

**query** Object with properties for querystring. Find all options in the [API description](http://hotell.difi.no/api)

```javascript
var difi = require('difi');
var options = {
      dataset:'brreg/enhetsregisteret',
      format: 'json',
      query: {
        query:'Pythonia'
      }
};

difi(options, function(err, data){
  if (err) {
    throw err;
  }
  console.log(data);
});
```

## Usage - CLI

To use it as a CLI app install it globally.

To display help

```
$ difi --help
```

To display version

```
$ difi --version
```

Usage:
```
$ difi <dataset> --query=<query>
```
Optionally set return format.
Can be csv, json, jsonp, xml or yaml (default)

```
$ difi <dataset> --query=<query> --format=<format>
```