/*
* author: George Seif
* source: https://medium.com/@george.seif94/a-tour-of-the-top-5-sorting-algorithms-with-python-code-43ea9aa02889
*/


((r) => {
  function swap(r, idx, jdx) {
    const r_copy = [...r];
    r[idx] = r[jdx];
    r[jdx] = r_copy[idx];
    
    return r;
  }
  
  function bubble_sort(r) {
    const len = r.length;
    let swapped = true;
    
    let x = -1;
    while(swapped) {
      swapped = false;
      ++x;
      for (let i = 1; i < (len - x); i++) {
        if (r[i-1] > r[i]) {
          r = swap(r, i-1, i);
          swapped = true;
        }
      }
    }
    
    return r;
  }
  
  const r_sort = bubble_sort(r);
  
  return r_sort;
})([6, 5, 3, 1, 8, 7, 2, 4]);
