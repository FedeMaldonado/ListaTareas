const inputBox = document.getElementById("inputBox");
const tareaAgregada = document.getElementById("tareaAgregada");

function agregarTarea() {
  //Si clickeo el boton de agregar sin rellenar el campo del input
  if (inputBox.value === "") {
    alert("No existen tareas para agregar"); //sale una alerta avisando que no hay ninguna tarea para agregar
    //sino, si agregue una tarea.
  } else {
    let list = document.createElement("li"); //En la variable (list) voy a almacenar y crear el elemento especificado (li)
    list.innerHTML = inputBox.value; //Con la sintaxis innerHTML devuelvo el valor que contiene la variable list, es decir la tarea que agregué.
    tareaAgregada.appendChild(list); //Con el metodo appendChild agrego la variable list, que es la que contiene la tarea que agregue y se va a mostrar en el elemento (li).

    let cruz = document.createElement("cruz"); //Creo un elemente llamado cruz y lo guardo en la variable (cruz)
    cruz.innerHTML = "\u00d7"; //Muestro la cruz
    list.appendChild(cruz); //Agrego la cruz para mostrar en la lista
  }
  inputBox.value = "";
  guardarDatos();
}

//Creo un evento para cuando presione la tecla enter se agregue la tarea
inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

tareaAgregada.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      guardarDatos();
    } else if (event.target.tagName === "CRUZ") {
      event.target.parentElement.remove();
      guardarDatos();
    }
  },
  false
);

//Creo una funcion para guardar los datos en el localStorage.
function guardarDatos() {
  localStorage.setItem("data", tareaAgregada.innerHTML);
}

function mostrarTarea() {
  tareaAgregada.innerHTML = localStorage.getItem("data");
}
mostrarTarea();
