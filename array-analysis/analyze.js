function add(sum, cur) {
    return sum + cur;
}

function getMin(min, cur) {
    return min > cur ? cur : min;
}

function getMax(max, cur) {
    return max < cur ? cur : max;
}

function analyze(arr) {
    return {
        average : Math.round(arr.reduce(add, 0) / arr.length),
        min : arr.reduce(getMin),
        max : arr.reduce(getMax),
        length : arr.length,
    };
}

module.exports = analyze;