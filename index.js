function addMore() {
  var error = document.getElementById("error");
  error.innerHTML = "";
  var name = document.getElementById("name").value;
  if (name == "") {
    error.innerHTML = "Please add task";
  } else {
    var box = document.getElementById("box");
    let li = document.createElement("li");

    // content.id = "data";
    box.appendChild(li);
    document.getElementById("name").value = "";
    var content = document.createElement("span");
    content.textContent = name;
    li.appendChild(content);

    let delButton = document.createElement("button");
    delButton.textContent = "delete";
    delButton.type = "button";
    delButton.className = "remove";
    li.appendChild(delButton);
    delButton.addEventListener("click", deleting);

    //for editing
    let edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.type = "button";
    edit.className = "edit";
    li.appendChild(edit);
    edit.addEventListener("click", (e) => {
      editing(e.target.parentElement);
    });
  }
}
let delbtn = document.querySelector("ul");
function deleting() {
  let forDelete = this.parentElement;
  delbtn.removeChild(forDelete);
}

function editing(a) {
  var update = a.querySelector("span");
  let input = document.createElement("input");
  input.type = "text";
  input.value = update.textContent;
  a.append(input);
  input.focus();
  input.addEventListener("blur", () => {
    update.innerHTML = input.value;
    input.remove();
  });
}
