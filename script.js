const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
    const result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] > n) {
            if (currentSubarray.length > 0) {
                result.push(currentSubarray);
            }
            currentSubarray = [arr[i]];
            currentSum = arr[i];
        } else {
            currentSubarray.push(arr[i]);
            currentSum += arr[i];
        }
    }

    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

// Do not change the code below
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
