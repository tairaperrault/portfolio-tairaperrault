

/* ==========================================================================
   Contact Modal
   ========================================================================== */
   var modal = document.querySelector("#modal");
   var modalWrapper = document.querySelector("#modal-wrapper");
   var buttonClose = document.querySelector("#button-close");
   var buttonOpen = document.querySelector("#button-open");

   buttonClose.addEventListener("click", function() {
     modal.classList.toggle("closed");
     modalWrapper.classList.toggle("closed");
   });

   buttonOpen.addEventListener("click", function() {
     modal.classList.toggle("closed");
     modalWrapper.classList.toggle("closed");
   });


   /* ==========================================================================
      Hamburger Modal
      ========================================================================== */
      var hamburger = document.querySelector("#hamburger");
      var hamburgerWrapper = document.querySelector("#hamburger-wrapper");
      var hamburgerClose = document.querySelector("#hamburger-close");
      var hamburgerOpen = document.querySelector("#hamburger-open");

      hamburgerClose.addEventListener("click", function() {
        hamburger.classList.toggle("closed");
        hamburgerWrapper.classList.toggle("closed");
      });

      hamburgerOpen.addEventListener("click", function() {
        hamburger.classList.toggle("closed");
        hamburgerWrapper.classList.toggle("closed");
      });
