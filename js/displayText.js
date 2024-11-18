function displayText() {
    let text = document.getElementById("formMorfosis");
    text.style.display = "block";

    let verForm = document.getElementById("verForm");
    verForm.style.display = "none";

    let containerBienvenida = document.getElementById("containerBienvenida");
    containerBienvenida.classList.remove("containerBienvenida");
    containerBienvenida.classList.add("containerBienvenidaPost");

    let containerModal = document.getElementById("containerModal");
    containerModal.style.display = "flex";

  }