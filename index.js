function addMore() {
  var error = document.getElementById("error");
  error.innerHTML = "";
  var name = document.getElementById("name").value;
  if (name == "") {
    error.innerHTML = "Please add task";
  } else {
    var box = document.getElementById("box");
    let li = document.createElement("li");
    //li.textContent = name;
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
    // var edit = document.createElement("button");
    // edit.textContent = "Edit";
    // edit.className = "edit";
    // li.appendChild(edit);

    // edit.addEventListener("click", (e) => {
    //   editTask(e.target.parentElement);
    // });
  }
}
let delbtn = document.querySelector("ul");
function deleting() {
  let forDelete = this.parentElement;
  delbtn.removeChild(forDelete);
}

//working on it
// var editItem = null;
// var button = document.getElementById("data");
// button.addEventListener("click", function (evt) {
//   evt.target.parentNode.childNodes[0].data;
//   editItem = evt;
// });
