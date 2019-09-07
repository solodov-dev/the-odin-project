const capitalize = require('./capitalize')

test('returns capitalized string', () => {
    expect(capitalize('hello')).toBe('Hello');
})