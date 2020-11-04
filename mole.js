// Write your JS here.
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    popUpRandomMole();
  }, 0);

  function popUpRandomMole() {
    const moleHeads = document.getElementsByClassName("wgs__mole-head");
    let randomNumber = Math.floor(Math.random() * 8);
    let peekingMole = moleHeads[randomNumber];
    peekingMole.classList.remove("wgs__mole-head--hidden");
    console.log(peekingMole);

    setTimeout(() => {
      hideMole(peekingMole);
    }, 3000);
  }

  function hideMole(element) {
    element.classList.add("wgs__mole-head--hidden");
    setTimeout(() => {
      popUpRandomMole();
    }, 1000);
  }

  // document.getElementsByClassName("wgs__mole-head").onclick = function(event) {
  //   console.log("events", event.classList.add("wgs__mole-head--hidden"))
  // }

  document.getElementsByClassName("wgs__mole-head").addEventListener("click", (event) => {
    console.log("event target", event.target.classList.add("wgs__mole-head--hidden"))
    console.log("event.currentTarget", event.currentTarget.classList.add("wgs__mole-head--hidden"))
      // event.target.classList.add("wgs__mole-head--hidden")

  })

});
