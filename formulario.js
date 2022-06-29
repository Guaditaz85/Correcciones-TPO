const submit = () =>
  alert(
    "Gracias por llenar el formulario. En breve nos pondremos en contacto con usted"
  );
const reset = () => alert("Se borraron los datos del formuario");

const nombre = document.querySelector("#nombre");
if (nombre == 0) {
  alert("Debe llenar el campo nombre");
}

const apellido = document.querySelector("#apellido");
if (apellido == 0) {
  alert("Debe llenar el campo apellido");
}

const email = document.querySelector("#mail");
if (email == 0) {
  alert("Debe llenar el campo email");
}

const validar = document.querySelector(".submit");
validar.onclick = () => submit();

const resetaer = document.querySelector(".reset");
resetaer.onclick = () => reset();
