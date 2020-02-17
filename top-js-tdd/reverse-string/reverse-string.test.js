const reverseString = require('./reverse-string')

test('Reverse simple string', () => {
    expect(reverseString('Hello')).toBe('olleH');
})

test('Reverse sentence', () => {
    expect(reverseString('This is a sentence')).toBe('ecnetnes a si sihT');
})