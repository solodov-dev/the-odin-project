const caesar = require('./cipher');

test('Ciphers lowercase alphabet as expected', () => {
    expect(caesar('abcdefghijklmnopqrstuvwxyz', 1))
    .toBe('bcdefghijklmnopqrstuvwxyza');
})

test('Ciphers upperrcase alphabet as expected', () => {
    expect(caesar('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 5))
    .toBe('FGHIJKLMNOPQRSTUVWXYZABCDE');
})

test('Ciphers lowercase prase as expected', () => {
    expect(caesar('defend the east wall of the castle', 1))
    .toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
})

test('Ciphers prase with numbers and punctuation as expected', () => {
    expect(caesar('This is a text with numbers: 5, and punctuation!', 11))
    .toBe('Estd td l epie htes yfxmpcd: 5, lyo afynefletzy!');
})