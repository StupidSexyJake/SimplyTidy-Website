//  ====================
//  Booking Form
//  ====================
//
//  Table of Contents:
//    
//  1. Variables
//  2. Functions
//  3. Event Listeners
//
// ::::::::::::::::::::::
//    
//  1. Variables
//  ====================
    var bookingForm = document.getElementById("booking-form");        
    var bookingForm_container = document.getElementById("booking-form_container");
    var bookingForm_ctaButton = document.getElementById("homepage-call-to-action");
    var bookingForm_closeButton = document.getElementById("close-booking-form");
    var bookingForm_firstService = document.getElementById("booking-form_service_first"); 
    var bookingForm_secondService = document.getElementById("booking-form_service_second");  
    var bookingForm_thirdService = document.getElementById("booking-form_service_third");  
    var bookingForm_fourthService = document.getElementById("booking-form_service_fourth");   
//    
//  2. Functions
//  ====================
    function openBookingFormPopup() {            
        document.body.style.setProperty("--booking-form_opacity", 1);
        bookingForm.style.pointerEvents = "auto";
        bookingForm_container.classList.remove("transition_booking-form_out");    
        bookingForm_container.classList.add("transition_booking-form_in");
    }
    function closebookingFormPopup() {
        document.body.style.setProperty("--booking-form_opacity", 0);
        bookingForm.style.pointerEvents = "none";
        bookingForm_container.classList.remove("transition_booking-form_in");
        bookingForm_container.classList.add("transition_booking-form_out");
    }
//    
//  1. Event Listeners
//  ====================
    bookingForm_ctaButton.addEventListener("click", function(){
        openBookingFormPopup();
        bookingForm_closeButton.addEventListener("click", function(){
            closebookingFormPopup();
        }); 
        bookingForm.addEventListener("click", function () {
            if (!bookingForm_container.contains(event.target)) {
            closebookingFormPopup();
            }
        });
    });
    bookingForm_firstService.addEventListener("click", function(){                
        // Define variables      
        var bookingForm_sectionTitle = document.getElementById("booking-form-header-title");
        var bookingForm_content_container = document.getElementById("booking-form_content_container");        
        var bookingForm_height = window.getComputedStyle(bookingForm_container).getPropertyValue("height");
        bookingForm_container.style.height = bookingForm_height;
        bookingForm_container.classList.add("transition_booking-form_expand-container");
        bookingForm_firstService.parentNode.classList.add("transition_booking-form_expand-service");
        //bookingForm_firstService.style.opacity = "0";
        bookingForm_secondService.parentNode.style.display = "none";
        bookingForm_thirdService.parentNode.style.display = "none";
        bookingForm_fourthService.parentNode.style.display = "none";
        // Expand the popup to full height
        bookingForm_content_container.style.justifyContent = "flex-start";
        bookingForm_content_container.style.marginBottom = "0";        
        //bookingForm_container.style.height = "100%";
        bookingForm_container.style.maxHeight = "100vh";
        bookingForm_content_container.style.maxWidth = "none";
        bookingForm_content_container.style.maxHeight = "none";
        bookingForm_content_container.parentNode.style.maxWidth = "none";
        // Change the title
        bookingForm_sectionTitle.innerHTML = "Great! Tell us about your home.";
    });


    





    /*
    // STEP 0: Service Selection
    for (i = 0; i < serviceSelection.length; i++) {
        serviceSelection[i].addEventListener("click", function(){                
            // Define variables      
            var bookingFormsectionTitle = document.getElementById("booking-form-header-title");
            var serviceSelectionContainer = document.getElementById("booking-form_content_container");
            // Hide other service selections
            serviceSelection[i].nextElementSibling.style.display = "none";
            //$(this).siblings().hide();
            // Expand the popup to full height
            // 
            bookingForm_container.style.gridTemplate = "calc(#{convertUnit(bookingForm(header_padding), vmin)} * 2 + #{convertUnit(bookingForm(header_font-size), vmin)}) calc(#{aspect(bookingForm(header_aspect), vmax)} - calc(#{bookingForm(header_padding)} * 2 + #{convertUnit(bookingForm(header_font-size), vmin)})) 1fr / 1fr;";
            serviceSelectionContainer.style.maxHeight = "none";
            bookingForm_container.style.height = "100%";
            bookingForm_container.style.maxHeight = "100vh";
            // Change the title
            bookingFormsectionTitle.innerHTML = "Great! Tell us about your home.";
            // Display step 2 content
        });
    }    */