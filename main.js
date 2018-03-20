// Code from: https://www.youtube.com/watch?v=9Hz3P1VgLz4

const brain = require("brain.js");
const network = new brain.NeuralNetwork();

network.train([
    { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
    { input: { r: 0.1, g: 0.84, b: 0.72 }, output: { light: 1 } },
    { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
    { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
    { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
    { input: { r: 1, g: 0.99, b: 0 }, output: { light: 1 } },
    { input: { r: 1, g: 0.42, b: 0.52 }, output: { dark: 1 } } 
]);

const result = network.run({r: 0, g: 1 , b: 0.65});
console.log(result); 

/* 

/// Initialize brain & neural network 
// data can be given as JSON [instead of arrays] like so 
const brain = require("brain.js");
const network = new brain.NeuralNetwork();

/// Train Neural Network [with hard-coded training data] 
network.train([
    { input: {height: 60, weight: 150}, output: {adult: 1} }, 
    { input: {height: 30, weight: 60}, output: {adult: 0} }, 
    { input: { height: 30, weight: 60 }, output: { adult: 0 } } // More training data can go here to improve accuracy 

]);

/// Input Data [to be anaylyzed by neural-network 
const input = {height: 70, weight: 200}; 

/// Analyze & Display result 
const result = network.run(input);
console.log(`Result: ${JSON.stringify(result)} `); // chance 
*/ 

/* 
/// Initialize brain & neural network 
const brain = require("brain.js");
const network = new brain.NeuralNetwork();

/// Train Neural Network [with hard-coded training data] 
network.train([
    { input: [60, 150], output: [1] }, 
    { input: [30, 60], output: [0] }, 
    { input: [30, 60], output: [0] } // More training data can go here to improve accuracy 

]);

/// Input Data [to be anaylyzed by neural-network 
const input = [70, 200]; 

/// Analyze & Display result 
const result = network.run(input);
console.log(`Result: ${result} `); // chance 

*/

/* 
const brain = require("brain.js");
const network = new brain.NeuralNetwork();
network.train([
    { input: [1], output: [1] },
    { input: [0], output: [0] },
]); 
const result = network.run([4, 0]);
console.log(result); 
*/

