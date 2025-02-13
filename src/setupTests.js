// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

global.TextEncoder = jest.fn().mockImplementation(() => ({
    encode: jest.fn(str => new Uint8Array(str.split('').map(char => char.charCodeAt(0)))),
}));
