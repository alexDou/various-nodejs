function smallestNums (n, k) {
    let nArray = n.toString().split('').map(v => parseInt(v));
    
    if (nArray.length <= k) {
        return null;
    } else if (k < 1) {
        return n;
    } else if (k === 1) {
        const nMax = Math.max(...nArray);
        const nMaxIdx = nArray.lastIndexOf(nMax);
        return +[].concat(nArray.slice(0, nMaxIdx-1), nArray.slice(nMaxIdx)).join('');
    }
    
    nArray = (n < 0) ? nArray.splice(1).sort((a,b) => b-a) : nArray.sort((a,b) => a-b);
    let m = Math.floor(+nArray.join('') / (10**(nArray.length - k)));
    
    if (n < 0) {
        m *= -1;
    }

    return m;
}

console.log(
  smallestNums(4136254, 3)
);
