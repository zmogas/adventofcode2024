const fs = require("fs");

const day = "03";

const input = fs.readFileSync(`${day}.txt`, "utf-8");

// console.log({ input });

const muls = input.match(/(mul\(\d{1,3},\d{1,3}\))/g);
// console.log(muls);
let sum = 0;

for (let i = 0; i < muls.length; i++) {
  const nums = muls[i].match(/\((\d{1,3}),(\d{1,3})\)/);
  sum += Number(nums[1]) * Number(nums[2]);
}

console.log("Answer A:", sum);

const mulDos = input.match(/(mul\(\d{1,3},\d{1,3}\)|don't\(\)|do\(\))/g);
console.log(mulDos);

sum = 0;
let enabled = true;

for (let i = 0; i < mulDos.length; i++) {
  if (mulDos[i] === "don't()") {
    enabled = false;
  } else if (mulDos[i] === "do()") {
    enabled = true;
  } else if (enabled) {
    const nums = mulDos[i].match(/\((\d{1,3}),(\d{1,3})\)/);
    sum += Number(nums[1]) * Number(nums[2]);
  }
}

console.log("Answer B:", sum);
