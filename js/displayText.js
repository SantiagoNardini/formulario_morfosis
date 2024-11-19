function displayText() {
    let text = document.getElementById("formMorfosis");
    text.style.display = "block";

    let verForm = document.getElementById("verForm");
    verForm.style.display = "none";

    let containerBienvenida = document.getElementById("containerBienvenida");
    containerBienvenida.classList.remove("containerBienvenida");
    containerBienvenida.style.display = "none";

    let containerModal = document.getElementById("containerModal");
    containerModal.style.display = "flex";

    let banner = document.getElementById("banner");
    banner.style.display = "flex";

  }