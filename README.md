![Vindec](https://github.com/thephilip/vindec/blob/master/V.PNG)
# vindec
###### Node.js VIN decoding package.

## Installation
[![NPM](https://nodei.co/npm/vindec.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vindec/)

If you prefer the previous version of this module, please use `npm install vindec@1.1.1`.  The current version creates a constructor, but the functionality is the same.

## Usage
```javascript
// create instance
const Vindec = require('vindec');

// validate a VIN (requires 'vin-validator' npm package)
Vindec.validate('12345678901234567');

// decode a VIN; returns an object if valid
const vin = Vindec.decode('12345678901234567', function(err, result) {
  if (err) {
    console.log('Error: ' + err.message);
    return {
      vin: result.vin,
      valid: result.valid
    };
  }
});

console.log('Data: ' + JSON.stringify(vin));
```

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
