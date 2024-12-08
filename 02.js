const fs = require("fs");

const day = "02";

const input = fs.readFileSync(`${day}.txt`, "utf-8");

const lines = input.split("\n");
// const lines = ["15 12 9 6 3", "2 3 6 8 10", "9 10 13 14 16 18 21 22"];

let safe = 0;

lines.map((line) => {
  const reports = line.split(" ");

  // const isIncreasing = reports[0] < reports[1];
  const isIncreasing = reports[0] - reports[1] < 0;
  console.log("Line:", line);

  for (let i = 1; i < reports.length; i++) {
    const diff = Math.abs(reports[i] - reports[i - 1]);

    if (diff < 1 || diff > 3) {
      console.log("DIFF", reports[i - 1], reports[i], diff);
      return;
    }

    // if (isIncreasing && reports[i - 1] > reports[i]) {
    if (isIncreasing && reports[i - 1] - reports[i] > 0) {
      console.log("+++", reports[i - 1], reports[i]);
      return;
    }

    // if (!isIncreasing && reports[i - 1] < reports[i]) {
    if (!isIncreasing && reports[i - 1] - reports[i] < 0) {
      console.log("---", reports[i - 1], reports[i]);
      return;
    }
  }

  // console.log("still safe", line);
  safe++;
});

// 548 too low
// 598 too low
console.log("Answer A:", safe);
