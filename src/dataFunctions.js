/*Manipulación de datos*/
import petsData from './data/dataset.js';

const dataFunctions = {


  showDogs: (text) => {

    if(Array.isArray(petsData)){
      for(let i=0; i<petsData.length;i++){
        return petsData;
      }
    }
      else{
        return [];
      }
    }

}

export default dataFunctions;
