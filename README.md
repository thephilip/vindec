![Vindec](https://github.com/thephilip/vindec/blob/master/V.PNG)
# vindec
###### Node.js VIN decoding package.

## Installation
[![NPM](https://nodei.co/npm/vindec.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vindec/)

## Usage
```javascript
// create instance
const Vindec = require('vindec');
const V = new Vindec();

// decode a VIN; returns an object if valid
const vin = V.decode('WDDHF5KB6FB102113', function(err, result) {
	if (err) {
		console.log('Error: ' + err.message);
		return {
			vin: result.vin,
			valid: result.valid
		};
	}
});

console.log('Data: ' + JSON.stringify(vin));

## Information Decoded
```json
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

## Future Extension
I am planning on a plugin to alternatively fetch VIN data using the NHTSA API.