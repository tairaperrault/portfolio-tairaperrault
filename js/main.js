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
