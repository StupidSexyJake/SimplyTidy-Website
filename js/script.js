// VARIABLES
    // Side navigation menu
        var sidebar = document.getElementById("sidebar");        
        var sidebarMenu = document.getElementById("sidebar-menu");
        var sidemenuButton = document.getElementById("sidemenu-button");    
        var closeSidemenuButton = document.getElementById("close-sidemenu");
    // Booking form popup
        var bookingFormPopup = document.getElementById("booking-form-popup");        
        var bookingFormPopupForm = document.getElementById("booking-form-popup-form");
        var bookingFormPopupButton = document.getElementById("homepage-call-to-action");
        var closebookingFormPopupButton = document.getElementById("close-booking-form-popup");

// FUNCTIONS
    // Side navigation menu
        // Overlay the side navigation menu over the main content area
            function openSidemenu() {            
                document.body.style.setProperty("--sidemenu-opacity", 1);
                sidebar.style.pointerEvents = "auto";
                sidebarMenu.classList.remove("transitionOutRightToLeft");    
                sidebarMenu.classList.add("transitionInLeftToRight");
            }
        // Close the side navigation menu
            function closeSidemenu() {
                document.body.style.setProperty("--sidemenu-opacity", 0);
                sidebar.style.pointerEvents = "none";
                sidebarMenu.classList.remove("transitionInLeftToRight");
                sidebarMenu.classList.add("transitionOutRightToLeft");
            }
    // Booking form popup
        // Overlay the booking form popup over the main content area
            function openBookingFormPopup() {            
                document.body.style.setProperty("--booking-form-popup-opacity", 1);
                bookingFormPopup.style.pointerEvents = "auto";
                bookingFormPopupForm.classList.remove("transitionOutBottomToTop");    
                bookingFormPopupForm.classList.add("transitionInTopToBottom");
            }
        // Close the booking form popup
            function closebookingFormPopup() {
                document.body.style.setProperty("--booking-form-popup-opacity", 0);
                bookingFormPopup.style.pointerEvents = "none";
                bookingFormPopupForm.classList.remove("transitionInTopToBottom");
                bookingFormPopupForm.classList.add("transitionOutBottomToTop");
            }

// EVENT LISTENERS
    // Navigation bar - side menu button        
        sidemenuButton.addEventListener("click", function(){
            // Open side menu
            openSidemenu();
            // Create event listener for side menu close button
            closeSidemenuButton.addEventListener("click", function(){
                closeSidemenu()
            }); 
            // Close side menu when user clicks outside menu
            sidebar.addEventListener("click", function () {
                if (!sidebarMenu.contains(event.target)) {
                    closeSidemenu();
                }
            });
        });
    // Home page - booking form popup button     
        bookingFormPopupButton.addEventListener("click", function(){
            // Open side menu
            openBookingFormPopup();
            // Create event listener for side menu close button
            closebookingFormPopupButton.addEventListener("click", function(){
                closebookingFormPopup();
            }); 
            // Close side menu when user clicks outside menu
            bookingFormPopup.addEventListener("click", function () {
                if (!bookingFormPopupForm.contains(event.target)) {
                    closebookingFormPopup();
                }
            });
        });