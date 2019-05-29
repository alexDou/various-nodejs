/*
*  worker_threads
*  at the date of writing (test `node -v` = "v12.3.1") still experimental.
*  start with: `node --experimental-worker worker-main`
*/

const { Worker } = require('worker_threads');

const worker = new Worker('./qIO-worker.js', {
  workerData: {
    'a': {
      'b': {
        'c': 12,
        'd': 'Hello World'
      },
      'e': [1,2,3]
    }
  }
});

worker.once('message', (message) => {
  console.log(message);
});
worker.on('error', (err) => console.error(err));
worker.on('exit', (code) => {
  if (code !== 0)
    console.log(`Worker stopped with exit code ${code}`);
});
