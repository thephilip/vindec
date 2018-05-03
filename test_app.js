
const vindec = require('./index.js')
const vin = '1FTRX12V69FA11242'

console.log(`\n valid: ${vindec.validate(vin)}`)
console.log(`\n decode: ${JSON.stringify(vindec.decode(vin))}`)
