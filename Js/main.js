// Creating Responsive Mobile Navigation
// opening nav
function openNav(){
    var navList = document.querySelector('.nav-list');
     if(navList.style.display === 'none' || navList.style.display === ''){
        navList.style.display = 'block';
     }
}

// closing nav
function closeNav(){
    var navList = document.querySelector('.nav-list');
     if(navList.style.display === 'block'){
        navList.style.display = 'none';
     }
}






