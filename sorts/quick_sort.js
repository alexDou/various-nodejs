((r) => {
    const r_len = r.length;
    let l, i;

    function swap(r, i, j) {
        if (i !== j) {
            const tmp = r[i];
            r[i] = r[j];
            r[j] = tmp;
        }
    }

    function partition(r, low, high) {
        const pivot = r[high];
        l = low - 1, i = low;

        for (; i < high; i++) {
            if (r[i] < pivot) {
                swap(r, ++l, i);
            }
        }

        swap(r, ++l, high);
    }

    const quickSort = function (r, low, high) {
        if (low < high) {
            partition(r, low, high);
            quickSort(r, low, (l - 1));
            quickSort(r, (l + 1), high);
        }

        return r;
    };

    const sorted = quickSort(r, 0, r_len-1);  // pivot is the last one

    console.log(sorted);
})([10, 20, 80, 1, 24, 100, 12, 20, 34]);
