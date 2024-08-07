import renderItems from './view.js';
import dataFunctions from './dataFunctions.js';

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

/*BOTÓN QUE DESLIZA LOS FILTROS*/
const buttonFilters = document.querySelector('.boton-filtros');
buttonFilters.addEventListener("click", () => {
  /**
   * https://www.estudionexos.com/post/efecto-slide-con-css-selectores-y-transiciones/
   * https://siongui.github.io/2017/02/27/css-only-toggle-dom-element/
   */

})

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const ul = root.querySelector('ul');
  ul.innerHTML = '';

  const pets = dataFunctions.showPets();

  //Agregar la función showPets

  pets.forEach(pet => {
    const petItem = document.createElement('li');
    petItem.className = 'tarjeta';

    petItem.innerHTML = renderItems(pet)

    ul.appendChild(petItem);
  })
})
