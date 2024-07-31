const petsData = [
  // Perros
  // Mascotas Abandonadas
  {
    "id": "perro-abandonado-001",
    "name": "Rex",
    "shortDescription": "Perro grande y cariñoso abandonado.",
    "description": "Rex es un perro de gran tamaño, con un pelaje marrón brillante. Fue abandonado en un parque local y ha estado esperando un nuevo hogar. A pesar de su triste pasado, es amigable y le encanta jugar con pelotas. Busca una familia que le ofrezca amor y compañía.",
    "imageUrl": "https://example.com/images/rex.jpg",
    "facts": {
      "age": "4 años",
      "gender": "macho",
      "breed": "Labrador",
      "size": "grande",
      "temperament": "amigable"
    },
    "extraInfo": {
      "curiosities": "Le encanta nadar en el agua."
    }
  },
  {
    "id": "perro-abandonado-002",
    "name": "Samantha",
    "shortDescription": "Perra pequeña, abandonada en la calle.",
    "description": "Samantha es una perra pequeña, con un pelaje blanco y negro. La encontramos sola en una calle concurrida, y parece haber sido abandonada por su anterior dueño. Es muy dulce y le gusta estar cerca de las personas. Necesita un hogar que le brinde seguridad y afecto.",
    "imageUrl": "https://example.com/images/samantha.jpg",
    "facts": {
      "age": "2 años",
      "gender": "hembra",
      "breed": "Chihuahua",
      "size": "pequeña",
      "temperament": "dulce"
    },
    "extraInfo": {
      "curiosities": "Es muy buena con los niños."
    }
  },
  {
    "id": "perro-abandonado-003",
    "name": "Rocky",
    "shortDescription": "Perro mediano abandonado en el refugio.",
    "description": "Rocky es un perro mediano de pelaje gris que fue abandonado frente a un refugio. Es enérgico y muy leal. A pesar de haber pasado por momentos difíciles, sigue siendo amigable y disfruta de la compañía de las personas. Busca una familia que le dé una segunda oportunidad.",
    "imageUrl": "https://example.com/images/rocky.jpg",
    "facts": {
      "age": "5 años",
      "gender": "macho",
      "breed": "Schnauzer",
      "size": "mediano",
      "temperament": "leal"
    },
    "extraInfo": {
      "curiosities": "Es muy protector con su familia."
    }
  },
  {
    "id": "perro-abandonado-004",
    "name": "Toby",
    "shortDescription": "Perro mayor abandonado en la calle.",
    "description": "Toby es un perro mayor con pelaje blanco. Fue encontrado en la calle, claramente abandonado. A pesar de su edad, Toby sigue siendo cariñoso y tranquilo. Ideal para una familia que busque un compañero leal en sus años dorados.",
    "imageUrl": "https://example.com/images/toby.jpg",
    "facts": {
      "age": "8 años",
      "gender": "macho",
      "breed": "Cocker Spaniel",
      "size": "mediano",
      "temperament": "tranquilo"
    },
    "extraInfo": {
      "curiosities": "Le encanta recibir masajes."
    }
  },
  // Mascotas Perdidas
  {
    "id": "perro-perdido-001",
    "name": "Max",
    "shortDescription": "Perro perdido en busca de su dueño.",
    "description": "Max es un perro mediano con un pelaje dorado. Se perdió en un vecindario tranquilo y no ha encontrado a su dueño. Es muy enérgico y le gusta correr. Esperamos que su dueño lo encuentre pronto, pero mientras tanto, Max está buscando una nueva familia.",
    "imageUrl": "https://example.com/images/max.jpg",
    "facts": {
      "age": "3 años",
      "gender": "macho",
      "breed": "Golden Retriever",
      "size": "mediano",
      "temperament": "activo"
    },
    "extraInfo": {
      "curiosities": "Sabe hacer trucos básicos."
    }
  },
  {
    "id": "perro-perdido-002",
    "name": "Lola",
    "shortDescription": "Perra extraviada esperando a su dueño.",
    "description": "Lola es una perra de tamaño pequeño con un pelaje atigrado. Fue encontrada vagando sola por la ciudad. Es muy amistosa y le encanta recibir cariño. Aunque busca a su dueño, Lola también se adaptará a un nuevo hogar que le ofrezca amor y cuidados.",
    "imageUrl": "https://example.com/images/lola.jpg",
    "facts": {
      "age": "1 año",
      "gender": "hembra",
      "breed": "Bulldog Francés",
      "size": "pequeña",
      "temperament": "amigable"
    },
    "extraInfo": {
      "curiosities": "Disfruta de las siestas al sol."
    }
  },
  {
    "id": "perro-perdido-003",
    "name": "Charlie",
    "shortDescription": "Perro grande perdido buscando a su dueño.",
    "description": "Charlie es un perro grande y peludo que se perdió en el vecindario. Es muy amigable y juguetón. Esperamos que su dueño lo encuentre pronto, pero mientras tanto, Charlie está en busca de una familia temporal que le ofrezca cuidado y afecto.",
    "imageUrl": "https://example.com/images/charlie.jpg",
    "facts": {
      "age": "4 años",
      "gender": "macho",
      "breed": "Husky",
      "size": "grande",
      "temperament": "juguetón"
    },
    "extraInfo": {
      "curiosities": "Tiene un carácter muy enérgico."
    }
  },
  {
    "id": "perro-perdido-004",
    "name": "Molly",
    "shortDescription": "Perra pequeña perdida esperando a su familia.",
    "description": "Molly es una perra pequeña con un pelaje atigrado. Se perdió en un parque local y ha estado esperando a que su familia la recupere. Es muy amigable y le gusta estar cerca de las personas. Es ideal para un hogar que pueda ofrecerle seguridad y amor.",
    "imageUrl": "https://example.com/images/molly.jpg",
    "facts": {
      "age": "2 años",
      "gender": "hembra",
      "breed": "Yorkshire Terrier",
      "size": "pequeña",
      "temperament": "amigable"
    },
    "extraInfo": {
      "curiosities": "Sabe hacer trucos simples."
    }
  },
  // Crías Recién Nacidas
  {
    "id": "perro-cria-001",
    "name": "Buddy",
    "shortDescription": "Cachorro juguetón en busca de hogar.",
    "description": "Buddy es un cachorro adorable con pelaje negro y manchas blancas. Es muy juguetón y le encanta explorar. Aún está aprendiendo sobre la vida y necesita un hogar que pueda enseñarle y proporcionarle el cuidado adecuado para crecer sano y feliz.",
    "imageUrl": "https://example.com/images/buddy.jpg",
    "facts": {
      "age": "2 meses",
      "gender": "macho",
      "breed": "Beagle",
      "size": "pequeño",
      "temperament": "curioso"
    },
    "extraInfo": {
      "curiosities": "Es muy sociable con otros perros."
    }
  },
  {
    "id": "perro-cria-002",
    "name": "Bella",
    "shortDescription": "Cachorra dulce buscando una familia.",
    "description": "Bella es una cachorra de pelaje marrón claro, muy tierna y cariñosa. Fue rescatada de una situación de abandono y está lista para encontrar una familia que la quiera. Es juguetona y se lleva bien con otros animales. Ideal para cualquier hogar que le ofrezca amor y cuidado.",
    "imageUrl": "https://example.com/images/bella.jpg",
    "facts": {
      "age": "3 meses",
      "gender": "hembra",
      "breed": "Poodle",
      "size": "pequeña",
      "temperament": "dulce"
    },
    "extraInfo": {
      "curiosities": "Le gusta jugar con peluches."
    }
  },
  {
    "id": "perro-cria-003",
    "name": "Daisy",
    "shortDescription": "Cachorra enérgica y juguetona.",
    "description": "Daisy es una cachorra con pelaje blanco y manchas negras. Es muy activa y le encanta jugar con otros cachorros. Está buscando un hogar que pueda proporcionarle la atención y el entrenamiento que necesita para crecer sana y feliz.",
    "imageUrl": "https://example.com/images/daisy.jpg",
    "facts": {
      "age": "2 meses",
      "gender": "hembra",
      "breed": "Dálmata",
      "size": "pequeña",
      "temperament": "enérgica"
    },
    "extraInfo": {
      "curiosities": "Le encanta correr por el jardín."
    }
  },
  {
    "id": "perro-cria-004",
    "name": "Oscar",
    "shortDescription": "Cachorro alegre y lleno de vida.",
    "description": "Oscar es un cachorro pequeño con un pelaje negro y manchas blancas. Es muy alegre y le encanta jugar. Ideal para una familia que pueda dedicar tiempo a su entrenamiento y socialización para que crezca equilibrado y feliz.",
    "imageUrl": "https://example.com/images/oscar.jpg",
    "facts": {
      "age": "3 meses",
      "gender": "macho",
      "breed": "Jack Russell Terrier",
      "size": "pequeño",
      "temperament": "alegre"
    },
    "extraInfo": {
      "curiosities": "Es muy activo y le gusta correr."
    }
  },
  
  // Gatos
  // Mascotas Abandonadas
  {
    "id": "gato-abandonado-001",
    "name": "Whiskers",
    "shortDescription": "Gato adulto abandonado en el jardín.",
    "description": "Whiskers es un gato adulto con un pelaje gris y ojos verdes. Fue encontrado abandonado en el jardín de una casa. Es muy independiente pero también busca cariño. Está esperando un hogar donde pueda ser amado y cuidado adecuadamente.",
    "imageUrl": "https://example.com/images/whiskers.jpg",
    "facts": {
      "age": "5 años",
      "gender": "macho",
      "breed": "American Shorthair",
      "size": "mediano",
      "temperament": "independiente"
    },
    "extraInfo": {
      "curiosities": "Le gusta observar por la ventana."
    }
  },
  {
    "id": "gato-abandonado-002",
    "name": "Luna",
    "shortDescription": "Gata de pelaje negro, abandonada en el parque.",
    "description": "Luna es una gata de pelaje negro con ojos dorados que fue abandonada en un parque. Es muy cariñosa y busca un hogar donde pueda recibir amor. Se lleva bien con otros animales y es muy tranquila. Ideal para un ambiente hogareño y acogedor.",
    "imageUrl": "https://example.com/images/luna.jpg",
    "facts": {
      "age": "4 años",
      "gender": "hembra",
      "breed": "Siamés",
      "size": "mediano",
      "temperament": "tranquila"
    },
    "extraInfo": {
      "curiosities": "Tiene un pelaje muy suave."
    }
  },
  {
    "id": "gato-abandonado-003",
    "name": "Oliver",
    "shortDescription": "Gato adulto rescatado de la calle.",
    "description": "Oliver es un gato adulto con un pelaje atigrado. Fue rescatado de la calle y ha estado esperando en el refugio por un nuevo hogar. Es muy cariñoso y le gusta estar cerca de las personas. Busca una familia que le brinde amor y atención.",
    "imageUrl": "https://example.com/images/oliver.jpg",
    "facts": {
      "age": "6 años",
      "gender": "macho",
      "breed": "Maine Coon",
      "size": "grande",
      "temperament": "cariñoso"
    },
    "extraInfo": {
      "curiosities": "Le encanta jugar con cintas."
    }
  },
  {
    "id": "gato-abandonado-004",
    "name": "Bella",
    "shortDescription": "Gata rescatada de un contenedor de basura.",
    "description": "Bella es una gata con pelaje blanco y ojos azules, rescatada de un contenedor de basura. Es muy dulce y se adapta bien a nuevos entornos. Busca un hogar donde pueda sentirse segura y querida.",
    "imageUrl": "https://example.com/images/bella-gato.jpg",
    "facts": {
      "age": "3 años",
      "gender": "hembra",
      "breed": "Persa",
      "size": "mediano",
      "temperament": "dulce"
    },
    "extraInfo": {
      "curiosities": "Es muy buena para acurrucarse."
    }
  },
  // Mascotas Perdidas
  {
    "id": "gato-perdido-001",
    "name": "Mittens",
    "shortDescription": "Gato perdido en busca de su dueño.",
    "description": "Mittens es un gato perdido con pelaje gris claro y manchas blancas. Se perdió en un vecindario tranquilo y ha estado esperando a que su dueño lo encuentre. Es muy amigable y le gusta estar cerca de las personas.",
    "imageUrl": "https://example.com/images/mittens.jpg",
    "facts": {
      "age": "2 años",
      "gender": "macho",
      "breed": "British Shorthair",
      "size": "mediano",
      "temperament": "amigable"
    },
    "extraInfo": {
      "curiosities": "Sabe abrir puertas con su pata."
    }
  },
  {
    "id": "gato-perdido-002",
    "name": "Tigger",
    "shortDescription": "Gato perdido en busca de su familia.",
    "description": "Tigger es un gato atigrado que se perdió en un parque local. Es muy juguetón y le encanta interactuar con las personas. Aunque busca a su familia, también está abierto a encontrar un nuevo hogar donde pueda recibir amor y cuidados.",
    "imageUrl": "https://example.com/images/tigger.jpg",
    "facts": {
      "age": "3 años",
      "gender": "macho",
      "breed": "Abyssinian",
      "size": "mediano",
      "temperament": "juguetón"
    },
    "extraInfo": {
      "curiosities": "Le encanta trepar árboles."
    }
  },
  {
    "id": "gato-perdido-003",
    "name": "Cleo",
    "shortDescription": "Gata pequeña perdida esperando a su dueño.",
    "description": "Cleo es una gata pequeña con pelaje gris y ojos verdes. Se perdió en un área residencial y está esperando a que su dueño la recupere. Es muy cariñosa y se lleva bien con otros animales. Ideal para una familia que pueda ofrecerle cariño y cuidados.",
    "imageUrl": "https://example.com/images/cleo.jpg",
    "facts": {
      "age": "1 año",
      "gender": "hembra",
      "breed": "Sphynx",
      "size": "pequeña",
      "temperament": "cariñosa"
    },
    "extraInfo": {
      "curiosities": "Le gusta dormir en lugares cálidos."
    }
  },
  {
    "id": "gato-perdido-004",
    "name": "Felix",
    "shortDescription": "Gato perdido busca a su familia.",
    "description": "Felix es un gato con pelaje blanco y negro que se perdió en un vecindario ocupado. Es muy sociable y busca a su familia. Mientras tanto, Felix se adapta bien a nuevos entornos y está buscando un hogar temporal que le ofrezca amor y seguridad.",
    "imageUrl": "https://example.com/images/felix.jpg",
    "facts": {
      "age": "4 años",
      "gender": "macho",
      "breed": "Scottish Fold",
      "size": "mediano",
      "temperament": "sociable"
    },
    "extraInfo": {
      "curiosities": "Es muy bueno con los niños."
    }
  },
  // Crías Recién Nacidas
  {
    "id": "gato-cria-001",
    "name": "Kitty",
    "shortDescription": "Cachorra de gato juguetona en adopción.",
    "description": "Kitty es una cría de gato con pelaje blanco y negro. Es muy juguetona y curiosa. Busca un hogar donde pueda recibir la atención y el amor necesarios para crecer sana y feliz. Ideal para una familia que pueda dedicar tiempo a su socialización y cuidado.",
    "imageUrl": "https://example.com/images/kitty.jpg",
    "facts": {
      "age": "2 meses",
      "gender": "hembra",
      "breed": "Siamés",
      "size": "pequeña",
      "temperament": "curiosa"
    },
    "extraInfo": {
      "curiosities": "Le gusta jugar con hilos y pelotas."
    }
  },
  {
    "id": "gato-cria-002",
    "name": "Nala",
    "shortDescription": "Cachorra de gato en busca de una familia.",
    "description": "Nala es una cachorra con pelaje atigrado y ojos brillantes. Es muy dulce y se lleva bien con otros gatos. Busca un hogar que pueda ofrecerle cariño y cuidados mientras crece. Es ideal para familias con tiempo para dedicarle a su socialización.",
    "imageUrl": "https://example.com/images/nala.jpg",
    "facts": {
      "age": "3 meses",
      "gender": "hembra",
      "breed": "Maine Coon",
      "size": "pequeña",
      "temperament": "dulce"
    },
    "extraInfo": {
      "curiosities": "Le gusta explorar nuevos lugares."
    }
  },
  {
    "id": "gato-cria-003",
    "name": "Simba",
    "shortDescription": "Cachorro de gato juguetón y activo.",
    "description": "Simba es un cachorro de gato con pelaje dorado y ojos azules. Es muy activo y le encanta jugar con otros gatos. Está buscando un hogar que pueda ofrecerle atención y cariño mientras crece. Ideal para familias que buscan un compañero juguetón.",
    "imageUrl": "https://example.com/images/simba.jpg",
    "facts": {
      "age": "2 meses",
      "gender": "macho",
      "breed": "Bengalí",
      "size": "pequeño",
      "temperament": "activo"
    },
    "extraInfo": {
      "curiosities": "Es muy rápido y ágil."
    }
  },
  {
    "id": "gato-cria-004",
    "name": "Leo",
    "shortDescription": "Cachorro de gato enérgico y juguetón.",
    "description": "Leo es un cachorro de gato con pelaje gris claro y manchas oscuras. Es muy enérgico y le encanta jugar. Está buscando un hogar donde pueda recibir el amor y cuidado que necesita para crecer sano y feliz.",
    "imageUrl": "https://example.com/images/leo.jpg",
    "facts": {
      "age": "3 meses",
      "gender": "macho",
      "breed": "Sphynx",
      "size": "pequeño",
      "temperament": "enérgico"
    },
    "extraInfo": {
      "curiosities": "Le gusta trepar y explorar."
    }
  }
];

export default petsData;
