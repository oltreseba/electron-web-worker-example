const path = require('path')

// creating worker
let worker
setInterval(() => {
  if (worker) {
    console.log('Terminating worker')
    worker.terminate()
  }
  console.log('Starting worker')
  worker = new Worker(path.resolve(__dirname, 'worker.js'))
}, 1000)