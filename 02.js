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
  // console.log("Line:", line);

  for (let i = 1; i < reports.length; i++) {
    const diff = Math.abs(reports[i] - reports[i - 1]);

    if (diff < 1 || diff > 3) {
      // console.log("DIFF", reports[i - 1], reports[i], diff);
      return;
    }

    // if (isIncreasing && reports[i - 1] > reports[i]) {
    if (isIncreasing && reports[i - 1] - reports[i] > 0) {
      // console.log("+++", reports[i - 1], reports[i]);
      return;
    }

    // if (!isIncreasing && reports[i - 1] < reports[i]) {
    if (!isIncreasing && reports[i - 1] - reports[i] < 0) {
      // console.log("---", reports[i - 1], reports[i]);
      return;
    }
  }

  // console.log("still safe", line);
  safe++;
});

// 548 too low
// 598 too low
console.log("Answer A:", safe);
console.log();

const isReportSafe = (reports) => {
  const isIncreasing = reports[0] - reports[1] < 0;

  for (let i = 1; i < reports.length; i++) {
    const diff = Math.abs(reports[i] - reports[i - 1]);

    if (diff < 1 || diff > 3) {
      return false;
    }

    if (isIncreasing && reports[i - 1] - reports[i] > 0) {
      return false;
    }

    if (!isIncreasing && reports[i - 1] - reports[i] < 0) {
      return false;
    }
  }

  return true;
};

safe = 0;

lines.map((line) => {
  const reports = line.split(" ");

  if (isReportSafe(reports)) {
    console.log("Safe", line);
    safe++;
  } else {
    console.log("UN-Safe", line);
    for (let j = 0; j < reports.length; j++) {
      const copy = [
        ...(j > 0 ? reports.slice(0, j) : []),
        ...(j < reports.length ? reports.slice(j + 1) : []),
      ];
      // console.log(j, copy);
      if (isReportSafe(copy)) {
        console.log("Safe 2:", line);
        safe++;
        break;
      }
    }
  }
});

console.log("Answer B:", safe);
