var elHamburgBtn = document.querySelector(".hamburg-btn");
var elHeaderNavbar = document.querySelector(".header-navbar");

elHamburgBtn.addEventListener('click',function(){
  elHeaderNavbar.classList.toggle('open-menu');
})