var isEdit = 0;
var editID = "";
function addMore() {
  var error = document.getElementById("error");
  error.innerHTML = "";
  var name = document.getElementById("name").value;
  if (name == "") {
    error.innerHTML = "Please add task";
  } else {
    if (isEdit == 1) {
      let update = document.querySelector("#" + editID);
      update.innerText = name;
      //var contentValue = document.getElementById("data_" + uniqueID);
      //contentValue.innerText = name.value;
      isEdit = 0;
      editID = "";
      document.getElementById("name").value = "";
    } else {
      var lengthOfUl = document
        .getElementById("box")
        .getElementsByTagName("li").length;
      var uniqueID = lengthOfUl + 1;
      var box = document.getElementById("box");
      let li = document.createElement("li");
      li.className = "editMode";
      box.appendChild(li);

      console.log(uniqueID);
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "check-box";
      li.appendChild(checkbox);

      document.getElementById("name").value = "";
      var content = document.createElement("span");
      content.innerText = name;
      content.className = "getData";
      content.id = "data_" + uniqueID;

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
        var contentValue = document.getElementById("data_" + uniqueID);
        name.value = contentValue.innerText;
        isEdit = 1;
        editID = "data_" + uniqueID;
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
}
let delbtn = document.querySelector("ul");
function deleting() {
  let forDelete = this.parentElement;
  delbtn.removeChild(forDelete);
}
