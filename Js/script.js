// for about and contact section section because navbar has different property

// opening nav
function openNav(){
    var navList = document.querySelector('.nav-list');
    var navContainer = document.querySelector('.navbar');
     if(navList.style.display === 'none' || navList.style.display === ''){
         navList.style.display = 'block';
         navContainer.classList.add('active');

     } 
};

// closing nav
function closeNav(){
    var navList = document.querySelector('.nav-list');
    var navContainer = document.querySelector('.navbar');
     if(navList.style.display === 'block' || navContainer.classList.contains('active')){
        navList.style.display = 'none';
        navContainer.classList.remove('active');
     }
}