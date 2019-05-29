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
  
  function selection_sort(r) {
    for (let i = 0; i < r.length; i++) {
      let r_chunk = r.slice(i);
      let minimum = r_chunk.indexOf(Math.min(...r_chunk)) + i;
      r = swap(r, minimum, i)
    }
    
    return r;
  }
  
  const r_sort = selection_sort(r);
  
  return r_sort;
})([6, 5, 3, 1, 8, 7, 2, 4]);
