
const { validate, sanitize, getRegion, getMake, getYear} = require('./lib')
const { uri, action, format } = require('./lib/nhtsa.js')
const axios = require('axios')

class Vindec {
  constructor(vin, callback) {
    this.vin = ''
    this.callback = () => {}
    this.vindecated = {}
  }
  validate(vin) {
    return lib.validate(vin)
  }
  decode(vin, callback) {
    return this.validate(vin) ? lib.sanitize(
      {
          vin: vin,
          valid: true,
          wmi: vin.slice(0,3),
          vds: vin.slice(3,8),
          checkDigit: vin.slice(8,9),
          vis: vin.slice(9,17),
          region: lib.getRegion(vin.slice(0,2)),
          make: lib.getMake(vin.slice(0,3)),
          year: lib.getYear(vin.slice(6,7), vin.slice(9,10)),
          sequence_id: vin.slice(11,17)
      }) : { vin: vin, valid: false }
  }
 async nhtsa(vin) {
    let uri = `${api.uri}${api.action}${vin}${api.format.json}`
    return axios.get(uri)
  }
}

module.exports = new Vindec()
