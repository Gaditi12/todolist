function addMore() {
  var error = document.getElementById("error");
  error.innerHTML = "";
  var name = document.getElementById("name").value;
  if (name == "") {
    error.innerHTML = "Please add task";
  } else {
    var box = document.getElementById("box");
    let li = document.createElement("li");

    box.appendChild(li);
    document.getElementById("name").value = "";
    var content = document.createElement("span");
    content.innerText = name;
    content.className = "getData";
    content.id = "data";
    li.appendChild(content);
    //creating a delete button
    let delButton = document.createElement("button");
    delButton.textContent = "delete";
    delButton.type = "button";
    delButton.id = "remo";
    delButton.className = "remove";
    li.appendChild(delButton);
    delButton.addEventListener("click", deleting);

    //create an edit button
    let edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.type = "button";
    edit.id = "update";
    edit.className = "edit";
    li.appendChild(edit);

    edit.addEventListener("click", () => {
      let name = document.querySelector("#name");
      name.value = content.innerText;
      const parent = edit.parentElement;
      parent.parentElement.removeChild(parent);
    });
  }
}
let delbtn = document.querySelector("ul");
function deleting() {
  let forDelete = this.parentElement;
  delbtn.removeChild(forDelete);
}
