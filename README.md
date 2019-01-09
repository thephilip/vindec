# vindec
###### Node.js VIN decoding package.

## Installation
[![NPM](https://nodei.co/npm/vindec.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vindec/)

If you prefer the previous version of this module, please use `npm install vindec@1.1.1`.  The current version creates a constructor, but the functionality is the same.

## Usage
```javascript

const vindec = require('vindec');
console.log(`Valid: ${vindec.validate('YOURMOM')}`) // false
console.log(JSON.stringify(vindec.decode('meh'))) // { vin: 'meh', valid: false }

```

You may optionally add a callback as a second argument to decode for error checking as in the past, but it has been simplified and will always return an object.

## Information Decoded
```javascript
{ vin: '12345678901234567',
  valid: true,
  wmi: '123',
  vds: '5678',
  checkDigit: '9',
  vis: '01234567',
  region: 'Somewhere Around Here',
  make: 'UFO',
  year: '1776',
  sequence_id: '234567' }
```

## NHTSA Decode (alpha)
There is a new vindec method, nhtsaDecode, that is currently in alpha stage (barely working).  It currently fetches the JSON decoded information from the NHTSA api, but it's truncated.  It likely needs to stream the data and I would also like to allow for the fetching of different repsonse formats (i.e.: json, xml, csv).  If anyone would like to help, I'll be opening issues for each of these features.

## Usage
```javascript
  console.log(vindec.nhtsaDecode('11111111111111111'))
```
