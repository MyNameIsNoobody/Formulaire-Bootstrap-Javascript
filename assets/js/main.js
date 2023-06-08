(function () {
  "use strict";

  let form = document.querySelector("#lessonForm");
  const submitButton = document.querySelector("#submitButton");
  const successMessage = document.createElement("p");
  successMessage.classList.add("ml-3", "text-success");
  successMessage.textContent = "Le formulaire a été envoyé";
  let allFieldsValid;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();
    allFieldsValid = true; // Initialisation à true avant la vérification des champs

    Array.from(form.elements).forEach((input) => {
      if (input.type !== "submit") {
        if (!validateFields(input)) {
          input.classList.remove("is-valid");
          input.classList.add("is-invalid");
          input.nextElementSibling.style.display = "block";
          allFieldsValid = false; // Si un champ est invalide, allFieldsValid est défini sur false
        } else {
          input.nextElementSibling.style.display = "none";
          input.classList.remove("is-invalid");
          input.classList.add("is-valid");
        }
      }
    });

    if (allFieldsValid) {
      submitButton.insertAdjacentElement("afterend", successMessage);
    } else {
      successMessage.remove(); // Supprimer le message s'il est déjà affiché
    }
  });

  // Écoutez les changements sur les champs pour réinitialiser allFieldsValid lorsque les champs sont corrigés
  Array.from(form.elements).forEach((input) => {
    if (input.type !== "submit") {
      input.addEventListener("input", function () {
        if (!validateFields(input)) {
          allFieldsValid = false; // Si un champ est invalide, allFieldsValid est défini sur false
        }
      });
    }
  });
})();