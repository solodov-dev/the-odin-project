const capitalize = require('./capitalize')

test('capitalizes lowercase string', () => {
    expect(capitalize('hello')).toBe('Hello');
})

test('capitalizes uppercase string', () => {
    expect(capitalize('HELLO')).toBe('Hello');
})

test ('capitalizes uppercase/lowercase string', () => {
    expect(capitalize('UnUsuAl')).toBe('Unusual');
})

test('capitalizes sentence', () => {
    expect(capitalize('this is the sentence')).toBe('This is the sentence');
})