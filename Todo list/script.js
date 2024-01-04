document.getElementById("btn").addEventListener("click", () => {

  if (document.getElementById("input").value.length == 0) {
    alert("Please Enter a Task")
  }

  else {

    document.getElementById("tasks").innerHTML +=
      `<div class="task">
      <span id="taskname">
      ${document.getElementById("input").value}
      </span>

      <button class="delete"><img src="delete.png"></button>
      </div>
      `;

    var current_task = document.querySelectorAll(".delete");
    for (var i = 0; i < current_task.length; i++) {

      current_task[i].onclick = function () {
        this.parentNode.remove();
      }
    }

  }

  var task = document.querySelectorAll(".task");

  for (var i = 0; i < task.length; i++) {
    task[i].onclick = function () {
      this.classList.toggle('completed');
    }
  }

  document.getElementById("input").value = "";
  saveData();
})

