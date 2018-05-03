
const vindec = require('./index.js')
const vin = '1FTRX12V69FA11242'

console.log(`\n valid: ${vindec.validate(vin)}`)
console.log(` decode: ${vindec.decode(vin)}`)
