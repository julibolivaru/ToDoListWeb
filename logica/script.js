var tareas = []; 

function agregarTarea() {
  var nuevaTarea = document.getElementById("nuevaTarea");
  var listaTareas = document.getElementById("listaTareas");

  if (nuevaTarea.value === "") {
    alert("Por favor ingrese una tarea.");
    return;
  }

  var tarea = document.createElement("li");
  tarea.textContent = nuevaTarea.value;

  var iconoBorrar = document.createElement("i");
  iconoBorrar.className = "fas fa-trash-alt delete-icon";
  iconoBorrar.onclick = function () {
    tarea.remove();
    actualizarListaTareas();
  };

  tarea.appendChild(iconoBorrar);

  tarea.onclick = function () {
    this.classList.toggle("completado");
    actualizarListaTareas();
  };

  listaTareas.appendChild(tarea);
 tareas.push(nuevaTarea.value); 
  actualizarListaTareas(); 
  nuevaTarea.value = "";
}

function actualizarListaTareas() {
  console.log("Lista de Tareas:");
  console.log(tareas);
}
