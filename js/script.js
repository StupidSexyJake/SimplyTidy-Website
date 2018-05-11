function openSidemenu() {            
    document.getElementById("sidebarMenu").classList.remove("hideSidebar");    
    document.getElementById("sidebarMenu").classList.add("showSidebar");
    document.getElementById("sidebar").classList.remove("makeHidden");    
    document.getElementById("sidebar").classList.add("makeVisible");
}
function closeSidemenu() {        
    document.getElementById("sidebarMenu").classList.remove("showSidebar");
    document.getElementById("sidebarMenu").classList.add("hideSidebar");
    document.getElementById("sidebar").classList.remove("makeVisible");
    document.getElementById("sidebar").classList.add("makeHidden");
}