#difi#

Node.js module for querying the [hotell.difi.no API](http://hotell.difi.no/api).

##Installation##

```
$ npm install difi
```

You can also install it globally to use the CLI version

```
$ npm install difi -g
```

##Test##

Make sure you have installed [Mocha](http://visionmedia.github.io/mocha/) globally or go to the difi folder and do an nmp install.

```
$ npm test
```

##Usage##

Pass an object with the required properties and receive the result.

**dataset** The [dataset](http://hotell.difi.no/) you want to query.

**format** Format for the result. Can be csv, json, jsonp, xml or yaml

**query** Object with properties for querystring. Find all options in the [API description](http://hotell.difi.no/api)

```javascript
var difi = require('difi')
  , opts = {
      dataset:'brreg/enhetsregisteret',
      format: 'json',
      query: {
        query:'Pythonia'
      }
    };

difi(opts, function(err, data){
  if(err)throw err;
  console.log(data);
});
```

##CLI##

To use it as a CLI app install it globally.

To display help

```
$ difi --help

Usage:

$ difi --dataset=id-of-dataset --format=format-of-return --query=value-of-query

```


##Todo##
Better tests