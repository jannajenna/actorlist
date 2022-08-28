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

  clone.querySelector(".fullname1").textContent = info.fullname;

  clone.querySelector(".jopen").addEventListener("click", showModal);

  function showModal() {
    console.log("opened");
    document.querySelector(".modal").classList.add("active");
    document.querySelector(".overlay").classList.remove("activeo");

    document.querySelector(".fullname2").textContent = `${info.fullname}`;
    document.querySelector(".movie").textContent = `${info.movie}`;

    document.querySelector(".jclose").addEventListener("click", hideModal);

    function hideModal() {
      console.log("closed");
      document.querySelector(".modal").classList.remove("active");
      document.querySelector(".overlay").classList.add("activeo");
    }
  }

  const parent = document.querySelector("main");
  parent.appendChild(clone);
}
