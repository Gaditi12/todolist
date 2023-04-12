function addMore() {
  var error = document.getElementById("error");
  error.innerHTML = "";
  var name = document.getElementById("name").value;
  if (name == "") {
    error.innerHTML = "Please add task";
  } else {
    var box = document.getElementById("box");
    let li = document.createElement("li");
    li.className = "editMode";
    box.appendChild(li);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "check-box";
    li.appendChild(checkbox);

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
    edit.disabled = false;
    li.appendChild(edit);

    edit.addEventListener("click", () => {
      let name = document.querySelector("#name");
      //let btn = document.querySelector("#button");
      name.value = content.innerText;

      //btn.value = "Save";

      // const parent = edit.parentElement;
      // parent.parentElement.removeChild(parent);
    });
    checkbox.addEventListener("click", () => {
      if (checkbox.checked == true) {
        edit.disabled = true;
      } else {
        edit.disabled = false;
      }
    });
  }
}
let delbtn = document.querySelector("ul");
function deleting() {
  let forDelete = this.parentElement;
  delbtn.removeChild(forDelete);
}
