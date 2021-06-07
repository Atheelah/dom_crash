let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

// FORM SUBMIT EVENT
form.addEventListener("submit", addItem);

// DELETE EVENT
itemList.addEventListener("click", removeItem);

// ADD ITEM

function addItem(e) {
  e.preventDefault();

  // GET INPUT VALUE
  let newItem = document.getElementById("item").value;

  // CREATE NEW LI ELEMENT
  let li = document.createElement("li");
  li.className = "list-group-item";

  // ADD TEXT NODE WITH INPUT VALUE
  li.appendChild(document.createTextNode(newItem));

  // Create a delete button element
  let deleteBtn = document.createElement("button");

  // ADD CLASSES TO DELETE BUTTON
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // APPEND TEXT NODE
  deleteBtn.appendChild(document.createTextNode("x"));

  // APPEND BUTTON TO LI
  li.appendChild(deleteBtn);

  // APPEND LI TO LIST
  itemList.appendChild(li);
}

// REMOVE ITEM
function removeItem(e){
    if(e.target.classList.contains)
}