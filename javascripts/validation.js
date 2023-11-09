const prueba = document.getElementById("email_confirm")
function emailValidation() {
  const form = document.getElementById('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if(form.email.value !== form.email_confirm.value) {
      const element = document.createElement('p')
      const message = document.createTextNode("El correo electrónico no coincide.")
      
      

      form.appendChild(element);
      element.appendChild(message);
      element.classList.add("alert");
      setTimeout(() => {
        form.removeChild(element)
      }, 3000)
    } else {
      form.submit();
    }
  });
};

prueba.addEventListener("keyup", function() {
  const email = prueba.value
  const email_confirm = document.getElementById("email").value;
  if(email != email_confirm) {
    prueba.classList.add("error_bg")
  } else {
    prueba.classList.remove("error_bg")
  }
})
window.onload = emailValidation;