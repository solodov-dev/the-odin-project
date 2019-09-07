const cipher = require('./cipher');

test('Shifts lowercase letter correctly', () => {
    expect(cipher.shift('a', 1)).toBe('b');
})

test('Shifts uppercase letter correctly', () => {
    expect(cipher.shift('B', 1)).toBe('C');
})

test('Shifts lowercase letter correctly with wrapping', () => {
    expect(cipher.shift('z', 1)).toBe('a');
})

test('Shifts uppercase letter correctly with wrapping', () => {
    expect(cipher.shift('Z', 3)).toBe('C');
})

test(`Doesn't shift unalphabetical characters`, () => {
    expect(cipher.shift('!', 4)).toBe('!');
})

test('Ciphers lowercase alphabet as expected', () => {
    expect(cipher.caesar('abcdefghijklmnopqrstuvwxyz', 1))
    .toBe('bcdefghijklmnopqrstuvwxyza');
})

test('Ciphers lowercase alphabet as expected', () => {
    expect(cipher.caesar('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 5))
    .toBe('FGHIJKLMNOPQRSTUVWXYZABCDE');
})

test('Ciphers lowercase prase as expected', () => {
    expect(cipher.caesar('defend the east wall of the castle', 1))
    .toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
})

test('Ciphers prase with numbers and punctuation as expected', () => {
    expect(cipher.caesar('This is a text with numbers: 5, and punctuation!', 11))
    .toBe('Estd td l epie htes yfxmpcd: 5, lyo afynefletzy!');
})