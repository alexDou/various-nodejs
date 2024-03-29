const assert = require('assert').strict;

/**
 * source: Google
 * Given a list of numbers and a number k,
 * return true if any two numbers from the list add up to k,
 * otherwise return false
 *
 * @param a Array<number>
 * @param k number
 * @return boolean
 */
function solution(a, k) {
    const a_len = a.length;
    
    if (a_len < 2) {
        return false;
    }
    
    for (let i = 0; i < a_len; i++) {
        const diff = k - a[i]
        if (a.includes(diff)) return true; 
    }

    return false;
}

try {
    assert.deepStrictEqual(
        solution([102, 298, 2819, 28, 183, 28, 183, 455, 33, 1, 5, 20, 280, 988], 400),
        true,
        'wrong solution'
    );
    console.log('\x1b[32m', 'solution OK');
} catch (e) {
    console.error('\x1b[31m', e.message);
}

