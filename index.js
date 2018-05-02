
const fetch = require('node-fetch')
const lib = require('./lib')

class Vindec {
  constructor(vin, callback) {
    this.vin = '12345678901234567'
    this.callback = () => {}
    this.vindecated = {}
  }
  validate(vin) {
    return lib.validate(vin)
  }
  decode(vin, callback) {
    return this.validate(vin) ? lib.sanitize(
      {
          vin: vin.toUpperCase(),
          valid: true,
          wmi: vin.toUpperCase().slice(0,3),
          vds: vin.toUpperCase().slice(3,8),
          checkDigit: vin.toUpperCase().slice(8,9),
          vis: vin.toUpperCase().slice(9,17),
          region: lib.getRegion(vin.slice(0,2)),
          make: lib.getMake(vin.slice(0,3)),
          year: lib.getYear(vin.slice(6,7), vin.slice(9,10)),
          sequence_id: vin.slice(11,17)
      }) : { vin: vin, valid: false }

  }
  nhtsa(vin, callback) {
    return this.valid
  }
}

module.exports = new Vindec()
