
const validator = require('vin-validator')
const region = JSON.parse(JSON.stringify(require('./region.json')))
const make = JSON.parse(JSON.stringify(require('./manufacturer.json')))
const year = JSON.parse(JSON.stringify(require('./year.json')))

exports.validate =  function(vin) {
  // https://goo.gl/4xKuRd
  const vinArray = vin.split('')
  // validate length (17)
  // legal characters (0-9, A-Z (not I, O, or Q))
  // 9th character must be numberic or X

  //return validator.validate(vin) ? true : false;
}

exports.getRegion = function(wmi) {
    return region[wmi] ? region[wmi] : undefined;
}

exports.getMake = function(wmi) {
    if (!(make[wmi])) {
        return undefined;
    } else {
        return make[wmi] ? make[wmi] : make[wmi.slice(0,2)];
    }
}

exports.getYear = function(type, vis) {
    return type.match(/^[0-9]+$/) ? year[vis] - 30 : year[vis];
}

exports.sanitize = function(vin) {
  if (!vin.region) { vin.region = this.getRegion(vin.wmi) }
  if (!vin.make) { vin.make = this.getMake(vin.wmi) }
  return vin
}
