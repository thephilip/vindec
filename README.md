# vindec
###### Node.js VIN decoding package.

## Installation
[![NPM](https://nodei.co/npm/vindec.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vindec/)

If you prefer the previous version of this module, please use `npm install vindec@1.1.1`.  The current version creates a constructor, but the functionality is the same.

## Usage
```javascript

const vindec = require('vindec');

console.log(`Valid: ${vindec.validate('YOURMOM')}`) // false

console.log(vindec.decode('meh') // { vin: 'meh', valid: false }

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

## NHTSA Plugin (soon to be deprecated!)
I will be adding the functionality from this plugin to this package in the future.  In hindsight, I see maintaining the plugin architecture in its current, poor implementation makes the two packages too tightly coupled.  Stay tuned!  More information can be found at the package repository.

 [vindec-nhtsa](https://github.com/thephilip/vindec-nhtsa).
