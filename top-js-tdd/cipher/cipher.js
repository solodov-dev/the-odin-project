function shift(c, key) {
    let charCode = c.charCodeAt(0);
    let base = null;
    
    if (charCode >= 97 && charCode<= 122) {
        base = 97;
    } else if(charCode >= 65 && charCode<=90) {
        base = 65;
    } else {
        return c;
    }
    
    charCode = ((charCode - base + key) % 26) + base;
    return String.fromCharCode(charCode);
}

function caesar(s, key) {
    return s.split('').map(char => shift(char, key)).join('');
}

module.exports = caesar;