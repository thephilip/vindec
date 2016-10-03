/* 
 *	vindec - Vehicle Identification Number decoder
 *
 */
'use strict';

const vv = require('vin-validator');
const regionJSON = require('./region.json');
const makeJSON = require('./manufacturer.json');
const region = JSON.parse(JSON.stringify(regionJSON));
const make = JSON.parse(JSON.stringify(makeJSON));

let wmiRegion = function wmiRegion(wmi) {
	return region[wmi] ? region[wmi] : undefined;
}

let wmiMake = function wmiMake(wmi) {
	if (!(make[wmi])) {
		return undefined;
	} else {
		return make[wmi] ? make[wmi] : make[wmi.slice(0,2)];
	}
}

module.exports.decode = function decode(vin) {
	// accepts: vin string
	// returns: vin object
	let valid = vv.validate(vin);

	if (!valid) {
		 return new Error('Invalid VIN');
	}

	let vindecated = { 
		vin: vin.toUpperCase(),
		expanded: [ // break apart the vin
			vin.slice(0,3), // WMI
			vin.slice(3,8), // VDS
			vin.slice(8,9), // Check Digit
			vin.slice(9,17) // VIS
		]
	};

	// get region
	vindecated.region = wmiRegion(vin.slice(0,2));
	if (!vindecated.region) {
		wmiRegion(vin.slice(0,3));
	}

	// get make
	vindecated.make = wmiMake(vin.slice(0,3));
	if (!vindecated.make) {
		vindecated.make = wmiMake(vin.slice(0,2));
	}

	return vindecated;
};