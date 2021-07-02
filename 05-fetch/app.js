const userContainer = document.querySelector(".user-container");
const loadingText = document.querySelector(".loading");
const btn = document.querySelector(".btn");

const url = `https://randomuser.me/api`;

function renderUser(user) {
  const userHtml = `
      <img src="${user.picture.medium}" alt="" />
      <h2>${user.name.first} ${user.name.last}</h2>
      <h3>${user.gender}</h3>
      <h3>${user.email}</h3>
  `;
  userContainer.innerHTML = userHtml;
}

function fetchUser() {
  fetch(url)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const { results } = data;
      const [user] = results;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("finally");
    });
}

function toggleLoading(show) {
  loadingText.style.display = show ? "block" : "none";
  userContainer.style.display = show ? "none" : "block";
  btn.disabled = show ? true : false;
}

async function getUser() {
  toggleLoading(true);

  try {
    const res = await fetch(url);
    const data = await res.json();
    const { results } = data;
    const [user] = results;
    console.log(user);
    renderUser(user);
  } catch (error) {
    console.log(error);
  }

  toggleLoading(false);
}

btn.addEventListener("click", getUser);
