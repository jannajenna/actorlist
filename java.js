console.log("hej");

fetch("./actors.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    actorCinema(data);
  });

function actorCinema(data) {
  console.log(data);
  data.forEach(showInfo);
}

function showInfo(info) {
  const template1 = document.querySelector(".template1").content;
  const clone = template1.cloneNode(true);

  clone.querySelector(".fullname").textContent = info.fullname;

  const parent = document.querySelector("main");
  parent.appendChild(clone);
}

/* Modal */
const modal = document.querySelector(".modal");
const openModal = document.querySelectorAll(".jopen");
const closeModal = document.querySelector(".jclose");
const overlay = document.getElementById("overlay");

openModal.forEach((button) => {
  button.addEventListener("click", () => {
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
  /*   console.log("closed"); */
  modal.close();
  closeOverlay(overlay);
});

function closeOverlay(overlay) {
  if (overlay == null) return;
  overlay.classList.remove("active");
}
