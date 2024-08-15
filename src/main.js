import { renderItems } from './view.js';
import dataFunctions from './dataFunctions.js';
import petsData from './data/dataset.js';

const { showPets, filterDataByType, filterDataByAge, filterDataByValue, orderPetsBy } = dataFunctions;

//------------------ Botones principales ------------------//

/*Botón para abrir y cerrar Sidebar */

const root = document.getElementById('root')
let resultado = [];

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


// Botón Conócelos //

const btnConocelos = document.querySelector('#conocelos-btn')
const sectionTarjetas = document.querySelector('#tarjetas-section')

btnConocelos.addEventListener('click', () => {
  sectionTarjetas.scrollIntoView({
    behavior: 'smooth'
  });
});


// Botón aparecer Filtros //

document.querySelector('.boton-filtros').addEventListener('click', function () {
  const botones = document.querySelector('.mascotas-filtros');
  if (botones.style.display === 'none') {
    botones.style.display = 'block';
  }
  else {
    botones.style.display = 'none';
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const pets = showPets();
  root.appendChild( renderItems(pets));
})


//------------ Sección tarjetas - Funciones de Filtrado y Botón Limpiar ------------//


// Filtro Tipo //

const selectTipo = document.querySelector('#tipo');

selectTipo.addEventListener('change', (event) => {
  const valorElegido = event.target.value;
  root.innerHTML = '';
  resultado = filterDataByType(petsData,'type',valorElegido.toLowerCase());
  root.appendChild(renderItems(resultado));
})


// Filtro Edad //

const selectAge = document.getElementById('edad');
selectAge.addEventListener("change", () => {
  const valorElegido = selectAge.value;
  let resultado;

  // Definiendo un mapa de rangos de edad //

  const ageRanges = {
    'Cachorro': [0, 12],
    'Adulto': [13, 119],
    'Mayor': [120, 240]
  };

  if (ageRanges[valorElegido]) {
    root.innerHTML = "";

    const [minAge, maxAge] = ageRanges[valorElegido];
    resultado = filterDataByAge(petsData, 'age', minAge, maxAge);
    console.log('Resultado después del filtro por edad:', resultado); // Verifica el resultado aquí

  }

  root.appendChild(renderItems(resultado));
})

// Filtro Género //

const selectGenero = document.querySelector('#genero');

selectGenero.addEventListener('change', (event) => {
  const valorElegido = event.target.value;
  root.innerHTML = '';
  resultado = filterDataByValue(petsData,'gender', valorElegido);
  root.appendChild(renderItems(resultado))
});


//Filtro Tamaño //

const selectTamaño = document.querySelector('#tamaño');
selectTamaño.addEventListener('change', (event) => {
  const valorElegido = event.target.value;
  root.innerHTML = '';
  resultado = filterDataByValue(petsData,'size', valorElegido);
  root.appendChild(renderItems(resultado))

});


// Botón Limpiar //

const botonLimpiar = document.querySelector('#btn-limpiar');
botonLimpiar.addEventListener('click', () => {
  const pets = showPets();
  root.innerHTML = "";

  //Restablecer los selects
  selectTipo.value = "Tipo";
  selectGenero.value = "Genero";
  selectAge.value = "Edad";
  selectTamaño.value = "Tamaño";

  //Limpiar los radio buttons
  botonOrdenarAsc.checked = false;
  botonOrdenarDesc.checked = false;

  resultado = pets;

  root.appendChild(renderItems(pets));
});


// Filtro Ordenar Alfabéticamente //

const botonOrdenarAsc = document.querySelector('#asc');
botonOrdenarAsc.addEventListener("click", function(){
  root.innerHTML = ""
  console.log('Resultado antes de ordenar ascendente:', resultado);

  const valorElegido = botonOrdenarAsc.value;

  const ordenarPetsData = orderPetsBy(resultado,'name',valorElegido);
  console.log('Resultado después del ordenamiento ascendente:', ordenarPetsData);
  root.appendChild(renderItems(ordenarPetsData))

})

const botonOrdenarDesc= document.querySelector('#desc');
botonOrdenarDesc.addEventListener("click", function(){
  root.innerHTML = "";
  console.log('Resultado antes de ordenar descendente:', resultado);

  const valorElegido = botonOrdenarDesc.value;
  const ordenarPetsData = orderPetsBy(resultado,'name',valorElegido);
  console.log('Resultado después del ordenamiento descendente:', ordenarPetsData);
  root.appendChild(renderItems(ordenarPetsData))
})






