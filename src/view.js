export const renderItems = (pet) => {
  return `
    <ul itemscope itemtype="http://schema.org/Pet" class="tarjeta-contenido">
      <li>
        <img class="tarjeta-img" src="${pet.imageUrl}" alt="${pet.name}">
      </li>
      <li itemprop="name">${pet.name}</li>
      <li itemprop="description">${pet.shortDescription}</li>
      <li itemprop="age">Edad: ${pet.facts.age}</li>
      <li itemprop="gender">Género: ${pet.facts.gender}</li>
      <li itemprop="breed">Raza: ${pet.facts.breed}</li>
      <li itemprop="size">Tamaño: ${pet.facts.size}</li>
      <li itemprop="temperament">Comportamiento: ${pet.facts.temperament}</li>
    </ul>
  `;
};
export default renderItems;

