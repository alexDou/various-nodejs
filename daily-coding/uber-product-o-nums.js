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
function solution(a) {
    const a_len = a.length;
    let cumulative_product = [];
    const total_product = a.reduce((acc, v, idx) => {
        acc = idx === 0 ? v : acc * v;
        cumulative_product.push(idx === 0 ? v : cumulative_product[idx-1] * v);
        return acc;
    }, 0);

    for (let i = 0; i < a_len; i++) {
        const cum_val = cumulative_product[i-1] * a[i+1];
    }

    // tbd
}

try {
    // assert.deepStrictEqual(solution([3, 6, 2, 4, 5]), [240, 120, 360, 180, 138]);
    // assert.deepStrictEqual(solution([3, 2, 1]), [2, 3, 6]);
} catch (e) {

}

