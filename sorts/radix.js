/*
source: http://www.geekviewpoint.com/python/sorting/radixsort
thanks to: Isai Damier
*/

function radixsort(aList) {
    const RADIX = 10;
    let maxLength = false,
      tmp = -1,
      placement = 1,
      a = 0,
      buck = [];
    
    while (!maxLength) {
        maxLength = true;
        let buckets = new Array(RADIX).fill(0).map(_ => []);

        // split aList between lists
        for (const i in aList) {
            tmp = Math.floor(aList[i] / placement);
            buckets[tmp % RADIX] ? buckets[tmp % RADIX].push(aList[i]) : buckets[tmp % RADIX] = [aList[i]];
            if (maxLength && tmp > 0) {
                maxLength = false;
            }
        }
        
        // empty lists into aList array
        a = 0;
        for (let j = 0; j < RADIX; j++) {
            buck = buckets[j];
            for (let z = 0; z < buck.length; z++) {
                aList[a] = buck[z];
                a++;
            }
        }
       
        // move to next digit
        placement *= RADIX;
    }
    
    return aList;
}

/**
 * test
 */

const assert = require('assert');

const arr = [18,5,100,3,122,250,19,6,0,34,7,4,2];
const sorted = radixsort([...arr]);

try {
    assert.deepStrictEqual(sorted, [0,2,3,4,5,6,7,18,19,34,100,122,250]);
    console.info('1 passed');
} catch (err) {
    console.error(err, '1 failed');
}
