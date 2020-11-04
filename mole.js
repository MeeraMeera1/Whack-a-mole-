// Write your JS here.
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    popUpRandomMole();
  }, 0);

  function popUpRandomMole() {
    const moleHeads = document.getElementsByClassName(
      "wgs__mole-head":not("wgs__mole-head--whacked")
    );

    let randomNumber = Math.floor(Math.random() * 8);
    let peekingMole = moleHeads[randomNumber];
    peekingMole.classList.remove("wgs__mole-head--hidden");

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

  const moleHeads = document.getElementsByClassName("wgs__mole-head");
  for (let mole of moleHeads) {
    mole.addEventListener("click", (event) => {
      event.target.classList.add(
        "wgs__mole-head--hidden",
        "wgs__mole-head--whacked"
      );
      console.log(event);
      console.log(event.target);
    });
  }
});
