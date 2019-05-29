const {
  parentPort, workerData // Worker, isMainThread
} = require('worker_threads');

// workerData are coming from main thread
const o = workerData;

let op = Object.assign({}, o);

let paths = {};
let currentPath = [];
let idx = 0;
while (op) {
  let keys = Object.keys(op);
  if (!Array.isArray(op[keys[idx]]) && typeof op[keys[idx]] === 'object') {
    currentPath.push(keys[idx]);
    op = op[keys[idx]];
  } else {
    if (idx < keys.length) {
      paths[currentPath.join('/')+ '/' +keys[idx]] = op[keys[idx]];
      ++idx;
    } else {
      let prevParent = currentPath.length >= 2 ? currentPath.length - 2 : -1;
      if (prevParent > -1) {
        delete o[currentPath[currentPath.length - 2]][currentPath[currentPath.length - 1]];
        op = o[currentPath[currentPath.length - 2]];
        delete currentPath[currentPath.length - 1];
        currentPath.pop();
        idx = 0;
      } else {
        break;
      }
    }
  }
}

setTimeout(() => parentPort.postMessage(paths), 2000);
