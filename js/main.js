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


   /* ==========================================================================
      Lightbox Gallery
      ========================================================================== */

      var lightbox = document.querySelector("#lightbox");
      var lightboxWrapper = document.querySelector("#lightbox-wrapper");
      var lightboxClose = document.querySelector("#lightbox-close");
      var lightboxOpen = document.querySelector("#lightbox-open");

      lightboxClose.addEventListener("click", function() {
        lightbox.classList.toggle("closed");
        lightboxWrapper.classList.toggle("closed");
      });

      lightboxOpen.addEventListener("click", function() {
        lightbox.classList.toggle("closed");
        lightboxWrapper.classList.toggle("closed");
      });


    /* ==========================================================================
        Grid
       ========================================================================== */

       function resizeGridItem(item){
         grid = document.getElementsByClassName("grid")[0];
         rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
         rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
         rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
           item.style.gridRowEnd = "span "+rowSpan;
       }

       function resizeAllGridItems(){
         allItems = document.getElementsByClassName("item");
         for(x=0;x<allItems.length;x++){
           resizeGridItem(allItems[x]);
         }
       }

       function resizeInstance(instance){
           item = instance.elements[0];
         resizeGridItem(item);
       }

       window.onload = resizeAllGridItems();
       window.addEventListener("resize", resizeAllGridItems);

       allItems = document.getElementsByClassName("item");
       for(x=0;x<allItems.length;x++){
         imagesLoaded( allItems[x], resizeInstance);
       }


       
