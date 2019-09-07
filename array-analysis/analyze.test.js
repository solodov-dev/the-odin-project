const analyze = require('./analyze');

test('Returns correct object on an array 1', () => {
    const arr = [1,8,3,4,2,6]
    expect(analyze(arr)).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('Returns correct object on an array 2', () => {
    const arr = [14,-3,18,89]
    expect(analyze(arr)).toEqual({
        average: 30,
        min: -3,
        max: 89,
        length: 4
    });
});