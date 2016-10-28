![Vindec](https://github.com/thephilip/vindec/blob/master/V.PNG)
# Vindec
###### Node.js VIN decoding package.

## Installation
[![NPM](https://nodei.co/npm/vindec.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vindec/)

## Usage
```javascript
// require and process a vin
let vindec = require('vindec');
let vin = vindec.decode('12345678901234567'); // not a valid vin
```

## Information Decoded (WIP)
* Region (```vin.region```) Manufactured Locale
* Make (```vin.make```) Manufacturer
* Year (```vin.year```) Manfacture Year
* Sequence ID (```vin.sequence_id```) Sequence Production Number
