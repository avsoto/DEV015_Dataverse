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

  //Filtro Género //

  filterDataByGender: (petsData,filterBy,value)=> {
    return petsData.filter(petGender => petGender.facts[filterBy] === value)
  },

  //Filtro Tamaño //

  filterDataBySize: (petsData,filterBy,value)=> {
    return petsData.filter(petSize => petSize.facts[filterBy] === value)
  },

}

export default dataFunctions;








