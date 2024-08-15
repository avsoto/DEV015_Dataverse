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

  filterDataByAge: (petsData,filterBy, minValue, maxValue) => {
    return petsData.filter(pet => {
      const { years, months } = pet.facts[filterBy];
      
      // Convertir la edad total a meses //
      
      const totalMonths = (years * 12) + months;

      return totalMonths >= minValue && totalMonths <= maxValue;
    })
 
  },

  // Filtro Género y Tamaño //

  filterDataByValue: (petsData,filterBy,value)=> {
    return petsData.filter(petFilteredBy => petFilteredBy.facts[filterBy] === value)
  },

  // Ordenamientos //

  orderPetsBy: (petsData, sortBy, sortOrder)=> {
    return petsData.sort((a, z) => {

      if (a[sortBy] > z[sortBy]) {
        return sortOrder === "asc" ? 1 : -1;
      } else if (a[sortBy] < z[sortBy]) {
        return sortOrder === "asc" ? -1 : 1;
      }
    });

  },

}



export default dataFunctions;








