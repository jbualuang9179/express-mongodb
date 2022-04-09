// Asynchronous Operation on Node.js
// 1. Callbacks -> function name(param1, param2, ..., callback);
const myRequest = (data, callback) => {
    const response = 10 + data;
    const error = undefined;
    const result = callback(error, response);
    return result;
}
const result = myRequest(5, (error, res) => {
    if (error) {
        return 'You have got Error';
    } else {
        return res;
    }
});
console.log(result)

// 2. Promise

// 3. async/await

console.log('Hello, Node.js');