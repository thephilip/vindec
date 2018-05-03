
const validator = require('vindec-validator')
const region = require('./region.js')
const make = require('./manufacturer.js')
const year = require('./year.js')

exports.validate =  function(vin) {
  return validator.valid(vin)
}

exports.getRegion = function(wmi) {
  return region[wmi] ? region[wmi] : 'not_found'
}

exports.getMake = function(wmi) {
  if (!(make[wmi])) { return 'not_found' }
  return make[wmi] ? make[wmi] : make[wmi.slice(0,2)]
}

exports.getYear = function(type, vis) {
    return type.match(/^[0-9]+$/) ? year[vis] - 30 : year[vis]
}

exports.sanitize = function(vin) {
  if (!vin.region) { vin.region = this.getRegion(vin.wmi) }
  if (!vin.make) { vin.make = this.getMake(vin.wmi) }
  return vin
}

exports.fetch = function(uri) {
	return new Promise((resolve, reject) => {
		const http = uri.startsWith('https') ? require('https') : require('http')
    console.log('little')
		const req = http.get(uri, (res) => { // wtf is undefined?
      console.log('motherfucker')
			if (res.statusCode < 200 || res.statusCode > 299) {
				reject(new Error('Request failed!  [' + res.statusCode + ']'));
			}
			let data = [];
			res.on('data', (chunk) => data.push(chunk));
			res.on('end', () => resolve(data.join('')));
		});

		req.on('error', (err) => reject(err))
	});
};
