# vindec
###### Node.js VIN decoding package.

## Installation
    $ npm install --save vindec

```javascript
// require and process a vin
let vindec = require('vindec');
let vin = vindec.decode('12345678901234567'); // not a valid vin
```

## Information Decoded (WIP)
* Region (```vin.region```) Manufactured Locale
* Make (```vin.make```) Manufacturer