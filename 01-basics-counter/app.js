// function add(number1, number2) {
//   const sum = number1 + number2;
//   return sum;
// }

// const sub = (number1, number2) => {
//   const result = number1 - number2;
//   return result;
// };

// const additionResult = add(10, 12);
// const subtractionResult = sub(10, 12);

const person = {
  name: "mani",
  age: 20,
  getName: function () {
    console.log(this.name, this.age);
  },
};

// console.log(person.name);
// person.getName();

const number = [1, 2, 3];
// console.log(number);
// number.push(1);
// console.log(number);

function incrementCount() {
  const prevCount = para.textContent;
  const newCount = parseInt(prevCount) + 1;
  para.textContent = newCount.toString();
}

function decrementCount() {
  const prevCount = para.textContent;
  const newCount = parseInt(prevCount) - 1;
  para.textContent = newCount.toString();
}

const incBtn = document.getElementById("inc-btn");
const decBtn = document.getElementById("dec-btn");
// const para = document.getElementById("para");
const para = document.querySelector("p");
const paras = document.querySelectorAll("p");

// const secondPara = paras[2];
// console.log(secondPara);

// const arrayParras = Array.from(paras);

incBtn.addEventListener("click", incrementCount);
decBtn.addEventListener("click", decrementCount);
