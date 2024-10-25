# vindec

## Node.js VIN decoding package

### Installation

[![NPM](https://nodei.co/npm/vindec.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vindec/)

If you prefer the previous version of this module, please use `npm install vindec@1.1.1`.  The current version creates a constructor, but the functionality is the same.

### Usage

```javascript

const vindec = require('vindec');
console.log(`Valid: ${vindec.validate('YOURMOM')}`) // false
console.log(JSON.stringify(vindec.decode('meh'))) // { vin: 'meh', valid: false }

```

You may optionally add a callback as a second argument to decode for error checking as in the past, but it has been simplified and will always return an object.

### Information Decoded

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

### NHTSA API Calls

Fetches the vehicle information from the NHTSA api. As a bonus, there is an opportunity to utilize the error responses from their api to provide better error handling to vindec in the future.

#### NHTSA API Documentation
You may read the official [NHTSA API documentaiton site](https://vpic.nhtsa.dot.gov/api/). Additionally, if you're feeling squirrelly and want to hit other endpoints, feel free to modify `./lib/nhtsa.js` to your liking, I may add/change somethings here in the future, be forewarned.

#### Usage (test)

```javascript

  const vin = '1G1BC53X76F123456' // example
  const vindec = new Vindec()

  vindec.nhtsa(vin).then(res => {
    console.log(res.data)
  }).catch(err => {
    console.error(err)
  })
  ```
