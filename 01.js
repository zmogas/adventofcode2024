const fs = require("fs");

const day = "01";

const input = fs.readFileSync(`${day}.txt`, "utf-8");

const lines = input.split("\n");
console.log(lines.length, { lines });

const listA = [];
const listB = [];

lines.map((line) => {
  const nums = line.split(/\s+/);
  if (nums.length < 2) return;

  listA.push(nums[0]);
  listB.push(nums[1]);
});

const sortA = listA.sort();
const sortB = listB.sort();

let sum = 0;

for (let i = 0; i < sortA.length; i++) {
  sum += Math.abs(sortA[i] - sortB[i]);
}

console.log("Answer A:", sum);

let similarity = 0;

for (let i = 0; i < sortA.length; i++) {
  const found = sortB.filter((item) => item === sortA[i]);
  similarity += sortA[i] * found.length;
}

console.log("Answer B:", similarity);
