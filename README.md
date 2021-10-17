[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# difi

Node.js module for querying the [hotell.difi.no API](http://hotell.difi.no/api).

Requires Node >= 14

## Installation

```sh
$ npm install difi --save
```

## Usage

Pass an object with the required properties and receive the result.

**dataset** The [dataset](https://hotell.difi.no/) you want to query.

**format** Format for the result. Can be csv, json, jsonp, xml or yaml

**query** Object with properties for querystring. Find all options in the [API description](https://hotell.difi.no/api)

```JavaScript
const difi = require('difi')
const options = {
      dataset: 'brreg/enhetsregisteret',
      format: 'json',
      query: {
        query: 'Registerenheten i Brønnøysund'
      }
}

difi(options)
  .then(console.log)
  .catch(console.error)
```

Returns

```JavaScript
{ entries: 
   [ { tvangsavvikling: 'N',
       regnskap: '',
       forradrpostnr: '8900',
       ansatte_antall: '566',
       postadresse: 'Postboks 900',
       nkode3: '',
       ppoststed: 'BRØNNØYSUND',
       konkurs: 'N',
       stiftelsesdato: '',
       sektorkode: '6100',
       ansatte_dato: '12.10.2017',
       organisasjonsform: 'ORGL',
       navn: 'REGISTERENHETEN I BRØNNØYSUND',
       regifriv: 'N',
       forradrkommnr: '1813',
       regimva: 'N',
       tlf_mobil: '',
       forradrland: 'Norge',
       ppostland: 'Norge',
       avvikling: 'N',
       regifr: 'N',
       hovedenhet: '912660680',
       forretningsadr: 'Havnegata 48',
       url: 'www.brreg.no',
       forradrpoststed: 'BRØNNØYSUND',
       tlf: '75 00 75 09',
       nkode1: '84.110',
       nkode2: '',
       forradrkommnavn: 'BRØNNØY',
       regdato: '09.08.1995',
       orgnr: '974760673',
       regiaa: 'J',
       ppostnr: '8910' } ],
  page: 1,
  pages: 1,
  posts: 1 }
```

## Related

- [difi-cli](https://github.com/zrrrzzt/difi-cli) CLI for this module

## License

[MIT](LICENSE)
