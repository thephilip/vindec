
const vindec = require('./index.js')
const vin = '1FTRX12V69FA1124'

console.log(`\n valid: ${vindec.validate(vin)}`)
console.log(`\n decode: ${vindec.decode(vin)}`)
