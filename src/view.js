export const renderItems = (pet) => {
  return `
    <dl itemscope itemtype="http://schema.org/Pet" class="tarjeta-contenido">
      <div class="tarjeta-img-container">
        <img class="tarjeta-img" src="${pet.imageUrl}" alt="${pet.name}">
      </div>
      <dt></dt><dd itemprop="name">${pet.name}</dd>
      <dt></dt><dd itemprop="description">${pet.shortDescription}</dd>
      <dt>Edad:</dt><dd itemprop="age">${pet.facts.age}</dd>
      <dt>Género:</dt><dd itemprop="gender">${pet.facts.gender}</dd>
      <dt>Raza:</dt><dd itemprop="breed">${pet.facts.breed}</dd>
      <dt>Tamaño:</dt><dd itemprop="size">${pet.facts.size}</dd>
      <dt>Comportamiento:</dt><dd itemprop="temperament">${pet.facts.temperament}</dd>
    </dl>
  `;
};
export default renderItems;

