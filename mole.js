// Write your JS here.
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    popUpRandomMole();
  }, 0);

  function popUpRandomMole() {
    const moleHeads = document.getElementsByClassName("wgs__mole-head");
    // for (let moleHead of moleHeads) {
    let randomNumber = Math.floor(Math.random() * 8);
    let peekingMole = moleHeads[randomNumber];
    peekingMole.classList.remove("wgs__mole-head--hidden");
    console.log(peekingMole);

    setTimeout(() => {
      hideMole(peekingMole);
    }, 1000);
    // }
  }

  function hideMole(element) {
    element.classList.add("wgs__mole-head--hidden");
    setTimeout(() => {
      popUpRandomMole();
    }, 1000);
  }
});
