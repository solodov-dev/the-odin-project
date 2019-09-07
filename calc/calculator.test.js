const calculator = require('./calculator');

test('adding two positive numbers', () => {
    expect(calculator.add(10, 5)).toBe(15);
})

test('adding negative and positive number', () => {
    expect(calculator.add(10, -5)).toBe(5);
})

test('adding two negative numbers', () => {
    expect(calculator.add(-10, -5)).toBe(-15);
})

test('subtracting two positive numbers', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
})

test('subtracting two positive numbers with a negative result', () => {
    expect(calculator.subtract(2, 10)).toBe(-8);
})

test('subtracting two negative numbers', () => {
    expect(calculator.subtract(-10, -5)).toBe(-5);
})

test('multiplying two positive numbers', () => {
    expect(calculator.multiply(10, 5)).toBe(50);
})

test('multiplying two negative numbers', () => {
    expect(calculator.multiply(-10, -2)).toBe(20);
})

test('multiplying positive and negative number', () => {
    expect(calculator.multiply(-10, 5)).toBe(-50);
})

test('dividing two positive numbers', () => {
    expect(calculator.divide(10, 5)).toBe(2);
})

test('dividing two negative numbers', () => {
    expect(calculator.divide(-10, -5)).toBe(2);
})

test('dividing two negative numbers', () => {
    expect(calculator.divide(10, -2)).toBe(-5);
})

test('dividing by 0', () => {
    expect(calculator.divide(100, 0)).toBe('Error: You are trying to divide by 0!');
})