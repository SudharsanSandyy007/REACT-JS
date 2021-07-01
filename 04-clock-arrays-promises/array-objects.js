const arr = [0, 1, 2, 3];

// forEach
arr.forEach((elm) => {
  // console.log(elm);
});

// map -> returns an arrray
const squareArr = arr.map((elm) => {
  return elm * elm;
});
// console.log(squareArr);

// filter
const filteredArray = arr.filter((elm) => {
  return elm % 2 === 0;
});
// console.log(filteredArray);

const [firstNo, ...remainng] = arr;
// console.log(remainng);

const newArray = [...arr, 4, 5, 6];

const person = {
  id: 1,
  name: "john",
};

const { name } = person;
// console.log(name);

const newPerson = { ...person, phoneNo: 23234234, name: "mani" };
console.log(newPerson);

// keys of an object
const keys = Object.keys(person);

// values of an object
const values = Object.values(person);
