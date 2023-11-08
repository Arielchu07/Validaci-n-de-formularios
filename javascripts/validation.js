function emailValidation() {
  const form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    const email = form.email.value;
    const emailConfirm = form.email_confirm.value;

    if (email !== emailConfirm) {
      e.preventDefault();
      const errorElement = document.createElement('p');
      const errorMessage = document.createTextNode("El correo electrónico no coincide.");
      errorElement.appendChild(errorMessage);
      errorElement.classList.add("alert");

      (document.getElementById("tbody")).insertBefore(errorElement, document.getElementById("prueba"));
      email_conf.style.backgroundColor = "rgba(230,169,171,.5)";



      setTimeout(function () {
        errorElement.remove();
        document.getElementById("email_confirm").style.backgroundColor = "";
      }, 3000);
    }
  });
}

window.onload = emailValidation;

const email_conf = document.getElementById("email_confirm");


