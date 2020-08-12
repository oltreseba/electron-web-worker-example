const crypto = require('crypto')
// do random stuff to increase ram usage
let data = []
for (let i = 0; i < 100000; i++) {
  data.push(crypto.randomBytes(1000).toString('hex'))
}