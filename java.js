console.log("hej");

fetch("./actors.json")
  .then(function (resp) {
    return resp.json();
  })

  .then(function (data) {
    console.log(data);
  });

const modal = document.querySelector(".modal");
const openModal = document.querySelectorAll(".jopen");
const closeModal = document.querySelector(".jclose");
const overlay = document.getElementById("overlay");

openModal.forEach((button) => {
  button.addEventListener("click", () => {
    /* console.log("open"); */
    modal.showModal();
    openOverlay(overlay);
  });
});

function openOverlay(overlay) {
  if (overlay == null) return;
  overlay.classList.add("active");
}

/* closeModal.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("closed");
    modal.close();
    closeOverlay(overlay);
  });
}); */

closeModal.addEventListener("click", () => {
  /* console.log("closed"); */
  modal.close();
  closeOverlay(overlay);
});

function closeOverlay(overlay) {
  if (overlay == null) return;
  overlay.classList.remove("active");
}
