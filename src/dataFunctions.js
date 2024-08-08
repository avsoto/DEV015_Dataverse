/*Manipulación de datos*/
import petsData from './data/dataset.js';

const dataFunctions = {

  showPets: () => {

    if(Array.isArray(petsData)){
      return petsData;
    }
    else{
      return [];
    }
  },

  //filterData(array de objetos, variable por la que se filtrará, valor mínimo que un dato puede tener para ser incluido, valor máximo)
  filterData(petsData,filterBy, minValue, maxValue){
    //método filter = crea un nuevo array solo con los que cumplen
    return petsData.filter(pet => {
      // valorFiltrado = pet.facts[age] ( age -> valor específico que queremos filtrar)
      const valorFiltrado = pet.facts[filterBy];
      //23 determina si el valor extraido está dentro del rango especificado
      // Si está dentro, se agrega al nuevo array
      return valorFiltrado >= minValue && valorFiltrado <= maxValue;
    })
  }




}

export default dataFunctions;
