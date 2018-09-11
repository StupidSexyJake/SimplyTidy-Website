//  ====================
//  JavaScript - General  
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
//  Navigation drawer
    var sidebar = document.getElementById("sidebar");        
    var sidebarMenu = document.getElementById("sidebar-menu");
    var sidemenuButton = document.getElementById("sidemenu-button");    
    var closeSidemenuButton = document.getElementById("close-sidemenu");
//    
//  2. Functions
//  ====================
//  Navigation drawer
    function openSidemenu() {            
        sidebar.style.pointerEvents = "auto";
        document.body.style.setProperty("--sidemenu-opacity", 1);  
        sidebarMenu.classList.remove("transition_navbar_out");    
        sidebarMenu.classList.add("transition_navbar_in");
    }
    function closeSidemenu() {        
        sidebar.style.pointerEvents = "none";
        document.body.style.setProperty("--sidemenu-opacity", 0);
        sidebarMenu.classList.remove("transition_navbar_in");
        sidebarMenu.classList.add("transition_navbar_out");
    }
//    
//  1. Event Listeners
//  ====================
//  Navigation drawer
    sidemenuButton.addEventListener("click", function(){
        openSidemenu();
        closeSidemenuButton.addEventListener("click", function(){
            closeSidemenu()
        }); 
        sidebar.addEventListener("click", function () {
            if (!sidebarMenu.contains(event.target)) {
                closeSidemenu();
            }
        });
    });