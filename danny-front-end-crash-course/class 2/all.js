// array manipulate methods
// push
// pop
// shift
// unshift
// splice *可新增也可刪除陣列內容* // array.splice(start index, numbers of items, add or exchange item (optional))

// map 回傳一個新的、經過處理的陣列
// filter 回傳一個新的、經過篩選的陣列（篩選條件為自己的邏輯）
// reduce 回傳一個將陣列計算後的值（例：將陣列內容加總 or 相乘... 等等）

const numberArr = [2, 4, 6, 8, 10];

const mappedArr = numberArr.map((item, index) => {
    return item - 1;
})

console.log(mappedArr)