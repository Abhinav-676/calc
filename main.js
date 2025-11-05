import { Expression } from "./Expression.js";

const e = "30 - 15 / 3 * 4 / 2 + 5 - 10 * 80 + 55"

const exp = new Expression(e);

const customStart = performance.now();
const customResult = exp.evaluate();
const customEnd = performance.now();

console.log(`Evaluate result: ${customResult}`);
console.log(`Evaluate time: ${(customEnd - customStart).toFixed(6)} ms`);