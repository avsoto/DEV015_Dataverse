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
  }
}

export default dataFunctions;
