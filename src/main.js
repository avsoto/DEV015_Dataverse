import { renderItems } from './view.js';
import dataFunctions from './dataFunctions.js';
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
})



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const pets = dataFunctions.showPets();

  root.appendChild(renderItems(pets));

})


/*Funciones*/



//FILTRAR POR EDAD
const selectAge = document.getElementById('edad');
selectAge.addEventListener("change", () => {
  const root = document.getElementById('root');
  const edadSeleccionada = selectAge.value;
  let resultado;
  // Definir un mapa de rangos de edad
  const ageRanges = {
    'cachorro': [0, 4],
    'adulto': [5, 9],
    'mayor': [10, 20]
  };

  /* Si existe dentro del rango de edad, ejecuta la funcion para filtrar tarjetas
   Si seleccione de aquí "cachorro", entonces se pregunta ageRanges[cachorro] existe?
    <label for="edad"></label>
    <select id="edad" name="elegir">
      <option value="asc" selected>Edad</option>
      <option value="asc">Cachorro</option>
      <option value="desc">Adulto</option>
      <option value="desc">Mayor</option>
    </select>
  */

  if (ageRanges[edadSeleccionada]) {
    root.innerHTML = "";
    // Si existe, extrae el mínimo y máximo de edad del rango seleccionado usando Desestructuración de arrays
    /*
      La desestructuración de arrays permite extraer valores de un array y asignarlos a variables en una sola línea.
      const array = [1, 2, 3];
      const [a, b, c] = array;

      console.log(a); // 1
      console.log(b); // 2
      console.log(c); // 3

      En el código siguiente:
      const range = ageRanges[edadSeleccionada];
      const minAge = range[0];
      const maxAge = range[1];
    */
    const [minAge, maxAge] = ageRanges[edadSeleccionada];
    resultado = dataFunctions.filterData(petsData, 'age', minAge, maxAge);
  } else {
    root.innerHTML = "";
    resultado = dataFunctions.showPets();
  }

  root.appendChild(renderItems(resultado));


  /* PRIMER ESBOZO DE LA FUNCIÓN

  if(edadSeleccionada === 'cachorro'){
    root.innerHTML = "";
    const resultado = dataFunctions.filterData(petsData,'age',0, 4);
    root.appendChild(renderItems(resultado));
  } else if (edadSeleccionada === 'adulto'){
    root.innerHTML = "";
    const resultado = dataFunctions.filterData(petsData,'age',5, 9);
    root.appendChild(renderItems(resultado));
  } else if(edadSeleccionada === 'mayor'){
    root.innerHTML = "";
    const resultado = dataFunctions.filterData(petsData,'age',10, 20);
    root.appendChild(renderItems(resultado));
  } else {
    root.innerHTML = "";
    const pets = dataFunctions.showPets();
    root.appendChild(renderItems(pets));
  }

*/

})






