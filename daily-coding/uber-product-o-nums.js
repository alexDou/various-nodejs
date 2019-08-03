const assert = require('assert');

/**
 * source: Uber
 * Given an array of integers,
 * return a new array such that each element at index i of the new array
 * is the product of all the numbers in the original array except the one at i.
 *
 * nb. restriction: do not use division
 *
 * @param a Array<number>
 * @return Array<number>
 */
function solution(a) { // [3, 6, 2, 4, 5] 720 /
    const a_len = a.length;

    let acc_r = [];

    for (let i = 0; i < a_len; i++) {
        acc_r.push(
            eval(
                Array.prototype.concat(a.slice(0,i), a.slice(i+1)).join('*')
            ) // still 00ps )
        );
    }

    return acc_r;
}

try {
    assert.deepStrictEqual(solution([3, 6, 2, 4, 5]), [240, 120, 360, 180, 144], 'solution failed 1');
    assert.deepStrictEqual(solution([3, 2, 1]), [2, 3, 6], 'solution failed 2');
    console.log('\x1b[32m', 'solution OK', '\x1b[0m');
} catch (e) {
    console.error('\x1b[31m', e.message, '\x1b[0m');
}
