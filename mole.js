// Write your JS here.
window.addEventListener("DOMContentLoaded", () => {





  setInterval(() => {
    function popUpRandomMole () {
      const moleHeads = document.getElementsByClassName(".wgs__mole-head");
      for(let moleHead of moleHeads){
        let randomNumber = Math.floor(Math.random() * 8);
        moleHead[randomNumber].classList.toggle("wgs__mole-head--hidden");
      }
    }

  }, 1000);

  function hideMole(param){
    
  }

});
