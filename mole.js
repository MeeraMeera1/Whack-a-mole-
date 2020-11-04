// Write your JS here.
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    popUpRandomMole();
  }, 0);

  function popUpRandomMole() {
    const moleHeads = document.querySelectorAll(
      ".wgs__mole-head:not(.wgs__mole-head--whacked)");
      console.log(moleHeads)
    let randomNumber = Math.floor(Math.random() * (moleHeads.length));
    console.log(randomNumber)
    if(moleHeads.length === 0){
      console.log("You Won")
      return;
    }
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
      // console.log(event);
      // console.log(event.target);
    });
  }
});
