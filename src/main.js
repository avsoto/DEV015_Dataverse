
window.onload=function(){
  const menuBtn = document.querySelector('.menu-btn')
  const btnCloseIcon = document.querySelector('.btn-close i')
  const dropDownMenu = document.querySelector('.sidebar')
  
  menuBtn.onclick = function(){
    dropDownMenu.classList.toggle('active')
  }
  
  btnCloseIcon.onclick = function(){
    dropDownMenu.classList.remove('active')
  }
  
}
