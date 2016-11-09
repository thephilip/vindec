/* 
 *  vindec - Vehicle Identification Number DECoder
 *
 */
'use strict';

const Validator = require('vin-validator');
const region = JSON.parse(JSON.stringify(require('./json/region.json')));
const make = JSON.parse(JSON.stringify(require('./json/manufacturer.json')));
const year = JSON.parse(JSON.stringify(require('./json/year.json')));
const internals = {};

const getRegion = function(wmi) {
    return region[wmi] ? region[wmi] : undefined;
}

const getMake = function(wmi) {
    if (!(make[wmi])) {
        return undefined;
    } else {
        return make[wmi] ? make[wmi] : make[wmi.slice(0,2)];
    }
}

const getYear = function(type, vis) {
    return type.match(/^[0-9]+$/) ? year[vis] - 30 : year[vis];
}

exports = module.exports = internals.Vindec = function() {

}

internals.Vindec.prototype.validate = Validator.validate;

internals.Vindec.prototype.decode = function(vin, callback) {
    const valid = this.validate(vin) ? true : false;
    if (!valid) {
        return callback(new Error('Validation Failed'), { vin: vin, valid: valid });
    }

    const vindecated = { 
        vin: vin.toUpperCase(),
        valid: true,
        wmi: vin.toUpperCase().slice(0,3),
        vds: vin.toUpperCase().slice(3,8),
        checkDigit: vin.toUpperCase().slice(8,9),
        vis: vin.toUpperCase().slice(9,17),
        region: getRegion(vin.slice(0,2)),
        make: getMake(vin.slice(0,3)),
        year: getYear(vin.slice(6,7), vin.slice(9,10)),
        sequence_id: vin.slice(11,17)
    };

    if (!vindecated.region) {
        vindecated.region = getRegion(vin.wmi);
    }

    if (!vindecated.make) {
        vindecated.make = getMake(vin.wmi);
    }

    return vindecated;
};