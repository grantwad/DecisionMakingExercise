// DECISION MAKING EXERCISE  


// 1a
let randomNum = Math.floor(Math.random() * 5 + 1);
// let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);

// 1b
if (randomNum >= 4) {
  console.log("Greater than or equal to 4");
} else if (randomNum === 2 || randomNum === 3) {
  console.log("Equal to 2 or 3");
} else {
  console.log("Equal to 1");
}

// Another Example for 1b

if (randomNum >= 4) {
// Same as line above
// if (randomNum > 3) {
  console.log("Greater than or equal to 4");
} else if (randomNum >= 2) {
// Same as line above
// } else if (randomNum > 1) {
  console.log("Equal to 2 or 3");
} else {
  console.log("Equal to 1");
}

// 1c
if (randomNum !== 3){
  console.log("Not equal to 3");
}

// Another Example for 1c

if (randomNum === 1 || randomNum === 2 || randomNum === 4 || randomNum === 5) {
  console.log("Not equal to 3");
}

// 1d
if (randomNum !== 3 && randomNum !== 5){
  console.log("NOT equal to 3 AND not equal to 5");
}

// Another Example or 1d

if (randomNum === 1 || randomNum === 2 || randomNum === 4) {
console.log(randomNum);
  console.log("NOT equal to 3 AND not equal to 5");
}

// 1e
if (randomNum === 2 || randomNum === 4) {
  console.log("Equal to 2 or equal to 4");
}
