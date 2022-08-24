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
  /*  const template = document.querySelector("template");
  const clone = template.cloneNode(true);

  clone.querySelector("fullname").textContent = information.fullname;

  document.querySelector("main").appendChild(clone); */
}

function showInfo(info) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

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
