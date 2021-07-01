function doSomething(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("yes it is even no");
    } else {
      reject("no it is not a even no");
    }
  });
}

doSomething(1)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
