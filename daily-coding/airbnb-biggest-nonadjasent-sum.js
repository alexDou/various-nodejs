const assert = require('assert').strict;

/**
 * source: AirBnB
 * Given a list of integers,
 * write a function that returns the largest sum of non-adjacent numbers.
 * Numbers can be 0 or negative.
 */
function solution(a) {
    const a_len = a.length;

    function max(a, b) {
        return Math.max(a, b);
    }

    if (a_len === 1) return a[0];

    if (a_len === 2) return max(...a);

    if (a_len === 3) return max(a[0] + a[2], a[1]);

    let odd = a[0] + a[2],
        even = max(a[0] + a[3], a[1] + a[3]);

    if (a_len === 4) return max(odd, even);

    /* briefly,
       max of a[i] + a[i+2] vs max of a[i+1] + a[i+3] OR a[i] + a[i+2] + a[i+3] */
    for (let i = 4; i < a_len; i+=2) {
        odd = odd + a[i];
        if (a[i+1]) {
            even = max(odd + a[i+1] - a[i], even + a[i+1]);
        } else {
            return max(odd, even);
        }
    }
}

try {
    assert.deepStrictEqual(
        solution([2, 4, 6, 2, 5, 8, 4, 10, 21, 9, 4, 6, 3]),
        45,
        'wrong solution'
    );
    console.log('\x1b[32m', 'solution OK', '\x1b[0m');
} catch (e) {
    console.error('\x1b[31m', e.message, '\x1b[0m');
}
