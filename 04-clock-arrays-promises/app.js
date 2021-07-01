const clock = document.querySelector(".clock");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");

function updateClock() {
  const currentDate = new Date();
  clock.textContent = currentDate.toLocaleTimeString();
}

setTimeout(() => {
  console.log("functino called");
}, 1000); // 1000ms -> 1s

const timer = setInterval(updateClock, 1000);

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
});

updateClock();

// then - catch
fetch("https://jsonplaceholder.typicode.com/todos/asdfasdf")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

// async - await
