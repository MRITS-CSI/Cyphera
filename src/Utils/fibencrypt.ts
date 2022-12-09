let fibmax = 0;
let fibvec: number[] = [];
let charstring = 'abcdefghijklmnopqrstuvwxyz';
let chars: string[] = [];

export const initialize = () => {
	chars = [];
	for (let i = 0; i < charstring.length; ++i) {
		chars.push(charstring[i]);
	}
};

export const fibonacciRec = (n: number) => {
	return n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};

export const fibonacci = (num: number) => {
	let num1 = 0;
	let num2 = 1;
	let sum;
	let i = 0;
	for (i = 0; i < num; i++) {
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	}
	return num2;
};

export const generateFibonacci = (n: number) => {
	if (fibmax >= n) return;
	for (let i = fibmax; i < n; ++i) fibvec.push(fibonacci(i));
};

export const getIndex = (n: number) => {
	return n % chars.length;
};

export const fibEncrypt = (s: string) => {
	let ns = s.toLowerCase();
	let out = '';

	for (let i = 0, j = 0; i < ns.length; ++i)
		out +=
			ns.charCodeAt(i) < 'z'.charCodeAt(0) &&
			ns.charCodeAt(i) > 'a'.charCodeAt(0)
				? chars[getIndex(fibvec[j++] + chars.indexOf(ns[i]))]
				: ns[i];

	return out;
};

initialize();
generateFibonacci(150);
// module.exports = { initialize, fibEncrypt, generateFibonacci, fibonacci, getIndex, fibmax, fibvec, chars, charstring }

// console.log(fibEncrypt("Hello, world!"));
// for (let i : number = 32; i <= 126; ++i)
//     chars.push(String.fromCharCode(i));
