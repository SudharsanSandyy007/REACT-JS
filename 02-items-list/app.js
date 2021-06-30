const addBtn = document.querySelector(".add-btn");
const itemsList = document.querySelector(".items");
const inputBox = document.querySelector("#input-box");
const formEl = document.querySelector("#my-form");

let items = [];

function saveItemToLocalStorage(inputValue) {
  items.push(inputValue);
  localStorage.setItem("items", JSON.stringify(items));
}

function removeItemFromLocalStorage(value) {
  // remove item
  const newItems = [];

  for (let item of items) {
    if (item != value) {
      newItems.push(item);
    }
  }
  // changes
  items = newItems;
  localStorage.setItem("items", JSON.stringify(newItems));
}

function createAndAddItemToScreen(item) {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");

  const pTag = document.createElement("p");
  pTag.classList.add("text");
  pTag.textContent = item;
  itemDiv.appendChild(pTag);

  const delBtn = document.createElement("button");
  delBtn.textContent = "delete";
  delBtn.onclick = handleDeleteItem;
  itemDiv.appendChild(delBtn);

  itemsList.appendChild(itemDiv);
}

function handleAddItem(event) {
  event.preventDefault();

  const value = inputBox.value;
  if (!value) return;

  createAndAddItemToScreen(value);
  saveItemToLocalStorage(value);
  inputBox.value = "";
}

function handleDeleteItem(event) {
  const delBtn = event.target;
  const itemDiv = delBtn.parentElement;
  const pTag = itemDiv.querySelector(".text");
  const text = pTag.textContent;

  removeItemFromLocalStorage(text);

  itemDiv.remove();
}

function displaySavedItem() {
  let value = localStorage.getItem("items");
  value = JSON.parse(value);
  if (value) {
    items = value;
  }

  for (let item of items) {
    createAndAddItemToScreen(item);
  }
}

// addBtn.addEventListener("click", handleAddItem);
formEl.addEventListener("submit", handleAddItem);

displaySavedItem();
