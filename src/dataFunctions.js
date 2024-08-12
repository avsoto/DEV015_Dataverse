/* Manipulación de datos */
import petsData from './data/dataset.js';

const dataFunctions = {

  /* Mostrar Tarjetas */

  showPets: () => {
    if(Array.isArray(petsData)){
      return petsData;
    }
    else{
      return [];
    }
  },

  //------------------ Filtro de Datos ------------------//

  // Filtro Tipo //

  filterDataByType: (petsData,filterBy,value)=> {
    return petsData.filter(petType => petType[filterBy] === value)
  },

  // Filtro Edad //

  filterData(petsData,filterBy, minValue, maxValue){
    return petsData.filter(pet => {

      const valorFiltrado = pet.facts[filterBy];

      return valorFiltrado >= minValue && valorFiltrado <= maxValue;
    })
  },

  //Filtro Género //

  filterDataByGender: (petsData,filterBy,value)=> {
    return petsData.filter(petGender => petGender.facts[filterBy] === value)
  },

  //Filtro Tamaño //

  filterDataBySize: (petsData,filterBy,value)=> {
    return petsData.filter(petSize => petSize.facts[filterBy] === value)
  },

  //Filtro Tamaño //

  orderByNameAsc: (petsData)=> {
    return petsData.sort((a,b)=> {return (a.name > b.name) ? 1 : -1 });
  },

  orderByNameDesc: (petsData)=> {
    return petsData.sort((a,b)=> {return (a.name < b.name) ? 1 : -1 });

  }

}



export default dataFunctions;








