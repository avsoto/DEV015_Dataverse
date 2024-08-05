
import petsData from './data/dataset.js';

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
  console.log("funciona");
})

/*
MUESTRA LA DATA - PERO NO SÉ SI ESTO VA AQUÍ EN MAIN O EN VIEW

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const ul = root.querySelector('ul');

  ul.innerHTML = '';


  petsData.forEach(dog => {
    const dogItem = document.createElement('li');
    dogItem.className = 'tarjeta';

    dogItem.setAttribute('itemscope', '');
    dogItem.setAttribute('itemtype', 'NuestrasMascotas');
    dogItem.innerHTML = `
     <dl itemscope itemtype="http://schema.org/Pet" class="tarjeta-contenido">
     <div class="tarjeta-img-container">
      <img class="tarjeta-img" src="${dog.imageUrl}" alt="${dog.name}">
      </div>
      <dt></dt><dd itemprop="name">${dog.name}</dd>
      <dt></dt><dd itemprop="description">${dog.description}</dd>
      <dt>Edad:</dt><dd itemprop="age">${dog.facts.age}</dd>
      <dt>Género:</dt><dd itemprop="gender">${dog.facts.gender}</dd>
      <dt>Raza:</dt><dd itemprop="breed">${dog.facts.breed}</dd>
      <dt>Tamaño:</dt><dd itemprop="size">${dog.facts.size}</dd>
      <dt>Comportamiento:</dt><dd itemprop="temperament">${dog.facts.temperament}</dd>
    </dl>
        `;

    ul.appendChild(dogItem);
  })



})
*/
