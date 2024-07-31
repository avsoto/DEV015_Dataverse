const petsData = [
  // Perros
  // Mascotas Abandonadas
  {
    "id": "perro-abandonado-001",
    "name": "Rex",
    "shortDescription": "Perro grande y amistoso, abandonado en el parque.",
    "description": "Rex es un perro grande con pelaje marrón y ojos alegres. Abandonado en el parque local, Rex busca una nueva familia que le brinde el amor y la atención que merece. Es un perro muy enérgico que disfruta jugar con pelotas y correr en el jardín. Ideal para quienes disfrutan de actividades al aire libre y buscan un compañero leal. Rex necesita mucho ejercicio y atención, por lo que es perfecto para familias activas que puedan ofrecerle el espacio y cariño necesarios para que se desarrolle felizmente.",
    "imageUrl": "https://example.com/images/rex.jpg",
    "facts": {
      "age": "4 años",
      "sex": "macho",
      "breed": "Labrador Retriever",
      "size": "grande",
      "temperament": "enérgico"
    },
    "extraInfo": {
      "curiosities": "Le encanta nadar en el lago."
    }
  },
  {
    "id": "perro-abandonado-002",
    "name": "Samantha",
    "shortDescription": "Perra pequeña y cariñosa abandonada en la calle.",
    "description": "Samantha es una perra pequeña con pelaje blanco y negro, encontrada en la calle. A pesar de su situación, es dulce y cariñosa, ideal para una familia que busque una compañera leal y afectuosa. Samantha es muy adaptable y le encanta estar cerca de las personas. Está buscando un hogar donde pueda recibir el cariño y cuidado que merece. Su tamaño pequeño la hace ideal para apartamentos o casas con menos espacio, donde pueda sentirse completamente segura y muy amada.",
    "imageUrl": "https://example.com/images/samantha.jpg",
    "facts": {
      "age": "2 años",
      "sex": "hembra",
      "breed": "Chihuahua",
      "size": "pequeña",
      "temperament": "dulce"
    },
    "extraInfo": {
      "curiosities": "Es excelente con los niños pequeños."
    }
  },
  {
    "id": "perro-abandonado-003",
    "name": "Rocky",
    "shortDescription": "Perro mediano, abandonado en un refugio.",
    "description": "Rocky es un perro mediano con pelaje gris que fue dejado en un refugio. Busca una familia amorosa que pueda ofrecerle cariño y atención. Es leal y juguetón, ideal para un hogar que pueda brindarle mucha interacción y espacio para jugar. Rocky se lleva bien con otros perros y necesita un ambiente activo donde pueda canalizar su energía. Su carácter amable y su afecto hacia las personas lo convierten en un excelente compañero para cualquier familia dispuesta a ofrecerle un hogar.",
    "imageUrl": "https://example.com/images/rocky.jpg",
    "facts": {
      "age": "5 años",
      "sex": "macho",
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
    "shortDescription": "Perro mayor, abandonado en la calle.",
    "description": "Toby es un perro mayor con pelaje blanco que fue encontrado en la calle. Está esperando en un refugio por un hogar cálido y amoroso. Aunque es mayor, Toby sigue siendo cariñoso y tranquilo, ideal para una familia que busque un compañero apacible. No necesita mucho ejercicio, pero sí mucho cariño. Su naturaleza tranquila lo convierte en un gran amigo para aquellos que buscan un perro tranquilo y amoroso que pueda integrarse fácilmente en su vida diaria pero sobre todo que les brinde mucha felicidad.",
    "imageUrl": "https://example.com/images/toby.jpg",
    "facts": {
      "age": "8 años",
      "sex": "macho",
      "breed": "Cocker Spaniel",
      "size": "mediano",
      "temperament": "tranquilo"
    },
    "extraInfo": {
      "curiosities": "Le encanta recibir caricias en su barriga."
    }
  },

  // Mascotas Perdidas
  {
    "id": "perro-perdido-001",
    "name": "Max",
    "shortDescription": "Perro perdido, busca a su dueño.",
    "description": "Max es un perro mediano con pelaje dorado que se perdió en un vecindario. Busca desesperadamente a su dueño. Es un perro activo y cariñoso que disfruta correr y jugar. Mientras tanto, Max está buscando un hogar temporal donde pueda recibir la atención y cuidados necesarios. Max es un compañero leal y afectuoso, ideal para quienes pueden ofrecerle un espacio seguro y mucho amor hasta que se reúna con su familia. Su carácter enérgico y su necesidad de compañía hacen que necesite un hogar activo.",
    "imageUrl": "https://example.com/images/max.jpg",
    "facts": {
      "age": "3 años",
      "sex": "macho",
      "breed": "Golden Retriever",
      "size": "mediano",
      "temperament": "activo"
    },
    "extraInfo": {
      "curiosities": "Sabe hacer trucos básicos como dar la pata."
    }
  },
  {
    "id": "perro-perdido-002",
    "name": "Lola",
    "shortDescription": "Perra extraviada esperando a su dueño.",
    "description": "Lola es una perra pequeña con pelaje atigrado que se extravió en un parque local. Es una perra amistosa y cariñosa que se lleva bien con otras mascotas. Mientras espera a su dueño, Lola está disponible para ser adoptada por una familia amorosa que pueda ofrecerle un hogar temporal. Es ideal para quienes buscan una perra dulce y muy bien educada, que pueda integrarse sin problemas a su hogar pero sobre todo que proporcione todo el amor y compañía a sus cuidadores durante este tiempo de espera.",
    "imageUrl": "https://example.com/images/lola.jpg",
    "facts": {
      "age": "1 año",
      "sex": "hembra",
      "breed": "Bulldog Francés",
      "size": "pequeña",
      "temperament": "amigable"
    },
    "extraInfo": {
      "curiosities": "Disfruta de las siestas bajo el sol."
    }
  },
  {
    "id": "perro-perdido-003",
    "name": "Charlie",
    "shortDescription": "Perro grande perdido buscando a su familia.",
    "description": "Charlie es un perro grande con pelaje peludo que se perdió en un vecindario. A pesar de estar perdido, Charlie sigue siendo un compañero leal y cariñoso. Es juguetón y necesita mucho espacio para moverse y jugar. Mientras busca a su familia, está disponible para un hogar temporal que le brinde cuidado, atención y mucho amor. Su tamaño y energía requieren un hogar con suficiente espacio y una familia dispuesta a interactuar con él, ofreciendo todo el amor, juegos y cuidado que necesita.",
    "imageUrl": "https://example.com/images/charlie.jpg",
    "facts": {
      "age": "4 años",
      "sex": "macho",
      "breed": "Husky",
      "size": "grande",
      "temperament": "juguetón"
    },
    "extraInfo": {
      "curiosities": "Tiene una gran resistencia y energía."
    }
  },
  {
    "id": "perro-perdido-004",
    "name": "Molly",
    "shortDescription": "Perra pequeña perdida en busca de su familia.",
    "description": "Molly es una perra pequeña con pelaje atigrado que se perdió en un parque local. Es amable y se lleva bien con otros animales. Mientras espera a su familia, Molly está buscando un hogar temporal donde pueda sentirse segura y querida. Su pequeño tamaño y naturaleza amistosa la hacen ideal para hogares con niños y otras mascotas. Molly necesita un entorno amoroso y seguro mientras se reúne con su familia, o una nueva familia que la adopte y le ofrezca un hogar permanente.",
    "imageUrl": "https://example.com/images/molly.jpg",
    "facts": {
      "age": "2 años",
      "sex": "hembra",
      "breed": "Yorkshire Terrier",
      "size": "pequeña",
      "temperament": "amigable"
    },
    "extraInfo": {
      "curiosities": "Sabe realizar algunos trucos sencillos."
    }
  },

  // Crías Recién Nacidas
  {
    "id": "perro-cria-001",
    "name": "Buddy",
    "shortDescription": "Cachorro juguetón busca un hogar.",
    "description": "Buddy es un cachorro con pelaje negro y manchas blancas que fue rescatado junto a su madre. Está buscando un hogar amoroso donde pueda crecer feliz y saludable. Es muy juguetón y curioso, ideal para una familia que pueda ofrecerle el cuidado y atención necesarios durante su crecimiento. Buddy es un cachorro alegre que necesita mucho amor y una familia que le proporcione un ambiente seguro y estimulante para desarrollarse adecuadamente. Su energía y afecto lo convierten en un excelente compañero.",
    "imageUrl": "https://example.com/images/buddy.jpg",
    "facts": {
      "age": "2 meses",
      "sex": "macho",
      "breed": "Beagle",
      "size": "pequeño",
      "temperament": "curioso"
    },
    "extraInfo": {
      "curiosities": "Es muy rápido corriendo y saltando."
    }
  },
  {
    "id": "perro-cria-002",
    "name": "Bella",
    "shortDescription": "Cachorra dulce y juguetona, busca hogar.",
    "description": "Bella es una cachorra pequeña con pelaje marrón claro, ella fue rescatada de la calle. Es muy dulce y juguetona, ideal para una familia que busque una hermosa compañera llena de energía y amor. Bella está lista para un hogar donde pueda recibir cuidados y atención, donde pueda crecer en un ambiente amoroso. Su naturaleza cariñosa y su tamaño pequeño la hacen perfecta para familias con niños y para quienes buscan una mascota adorable y activa pero sobre todo que brinde alegría a sus días.",
    "imageUrl": "https://example.com/images/bella.jpg",
    "facts": {
      "age": "3 meses",
      "sex": "hembra",
      "breed": "Cocker Spaniel",
      "size": "pequeño",
      "temperament": "dulce"
    },
    "extraInfo": {
      "curiosities": "Le encanta jugar con juguetes de peluche."
    }
  },
  {
    "id": "perro-cria-003",
    "name": "Daisy",
    "shortDescription": "Cachorra alegre y activa en busca de hogar.",
    "description": "Daisy es una linda cachorra de pelaje blanco con manchas negras, encontrada junto a su madre en un parque. Es muy activa, amorosa y alegre, ideal para aquellas familias que puedan ofrecerle un ambiente activo y amoroso. Daisy necesita un hogar en el cual pueda recibir los cuidados necesarios para crecer completamente saludable y feliz. Su energía y afecto hacia las personas la convierten en una excelente opción para quienes buscan un cachorro tierno, lleno de vida y con mucho amor para dar.",
    "imageUrl": "https://example.com/images/daisy.jpg",
    "facts": {
      "age": "2 meses",
      "sex": "hembra",
      "breed": "Poodle",
      "size": "pequeño",
      "temperament": "alegre"
    },
    "extraInfo": {
      "curiosities": "Disfruta de correr y jugar en el jardín."
    }
  },
  {
    "id": "perro-cria-004",
    "name": "Maxie",
    "shortDescription": "Cachorro travieso busca un hogar cariñoso.",
    "description": "Maxie es un cachorro pequeño con pelaje dorado y ojos brillantes, encontrado junto a sus hermanos en un refugio. Es un poco travieso y muy juguetón, ideal para una familia que pueda brindarle el amor y atención que necesita. Maxie está listo para un bello hogar donde pueda recibir el cuidado deseado para crecer feliz y saludable. Su personalidad vivaz y su tamaño pequeño lo hacen perfecto para familias que buscan un cachorro divertido y afectuoso que aporte alegría a su vida diaria.",
    "imageUrl": "https://example.com/images/maxie.jpg",
    "facts": {
      "age": "3 meses",
      "sex": "macho",
      "breed": "Labrador Retriever",
      "size": "pequeño",
      "temperament": "travieso"
    },
    "extraInfo": {
      "curiosities": "Le encanta jugar con otros cachorros."
    }
  },

  // Gatos
  // Mascotas Abandonadas
  {
    "id": "gato-abandonado-001",
    "name": "Whiskers",
    "shortDescription": "Gato de pelaje gris, abandonado en el jardín.",
    "description": "Whiskers es un gato de pelaje gris que fue abandonado en el jardín de una casa. Es un gato tranquilo y cariñoso que busca un hogar donde pueda sentirse feliz, seguro y amado. Le encanta descansar al sol y recibir caricias. Aunque fue abandonado, Whiskers sigue siendo amoroso y tranquilo. Lo mejor es que se adapta bien a nuevos entornos. Ideal para aquellas personas que buscan un compañero tranquilo al cual puedan ofrecerle un lugar cómodo, seguro y mucho cariño en su hogar.",
    "imageUrl": "https://example.com/images/whiskers.jpg",
    "facts": {
      "age": "4 años",
      "sex": "macho",
      "breed": "Maine Coon",
      "size": "grande",
      "temperament": "tranquilo"
    },
    "extraInfo": {
      "curiosities": "Le gusta observar desde las ventanas."
    }
  },
  {
    "id": "gato-abandonado-002",
    "name": "Luna",
    "shortDescription": "Gata pequeña y dulce, abandonada en la calle.",
    "description": "Luna es una hermosa gata pequeña con pelaje blanco y ojos azules que fue abandonada en la calle. Es dulce, tierna y cariñosa, ideal para una familia que busque una gata afectuosa que se adapte sin problemas a su hogar. Luna disfruta de las caricias en las orejas y es muy juguetona. Está buscando un hogar donde pueda recibir el amor y cuidado que necesita para sentirse segura. Su tamaño compacto y su naturaleza amigable la hacen perfecta para apartamentos o casas pequeñas.",
    "imageUrl": "https://example.com/images/luna.jpg",
    "facts": {
      "age": "2 años",
      "sex": "hembra",
      "breed": "Siamés",
      "size": "pequeña",
      "temperament": "dulce"
    },
    "extraInfo": {
      "curiosities": "Le encanta jugar con bolitas de papel."
    }
  },
  {
    "id": "gato-abandonado-003",
    "name": "Simba",
    "shortDescription": "Gato mediano, abandonado en un refugio.",
    "description": "Simba es un gato mediano con pelaje atigrado que fue dejado en un refugio. Es un gato amable, juguetón y cariñoso que está esperando por una familia amorosa. Simba es muy independiente todo el tiempo pero disfruta de la compañía humana y es perfecto para aquellos que buscan un compañero tranquilo y amoroso. Necesita un bello hogar donde pueda recibir el cuidado adecuado, completa seguridad y un lugar cómodo para descansar. Su tamaño y comportamiento calmado lo hacen ideal para diferentes tipos de hogares.",
    "imageUrl": "https://example.com/images/simba.jpg",
    "facts": {
      "age": "5 años",
      "sex": "macho",
      "breed": "Bengalí",
      "size": "mediano",
      "temperament": "amable"
    },
    "extraInfo": {
      "curiosities": "Disfruta trepar y explorar."
    }
  },
  {
    "id": "gato-abandonado-004",
    "name": "Mia",
    "shortDescription": "Gata mayor, abandonada en un patio.",
    "description": "Mia es una gata mayor con pelaje atigrado que fue abandonada en un patio. Aunque es mayor, sigue siendo muy activa, afectuosa y tranquila, ideal para una familia que busque una gata que se adapte a un hogar relajado. Mia disfruta de las siestas en lugares soleados y del contacto humano. Necesita un hogar donde pueda recibir todo ese cariño, seguridad y cuidados que necesita. Su carácter calmado y su tamaño la hacen perfecta para familias que buscan una compañera serena y cariñosa.",
    "imageUrl": "https://example.com/images/mia.jpg",
    "facts": {
      "age": "8 años",
      "sex": "hembra",
      "breed": "Persa",
      "size": "mediano",
      "temperament": "tranquila"
    },
    "extraInfo": {
      "curiosities": "Le encanta ser cepillada."
    }
  },

  // Mascotas Perdidas
  {
    "id": "gato-perdido-001",
    "name": "Oliver",
    "shortDescription": "Gato perdido con pelaje negro.",
    "description": "Oliver es un gato elegante con pelaje negro que se perdió en el vecindario. Busca desesperadamente a su familia a la cual extraña muchísimo y se encuentra asustado. Oliver es un gato cariñoso y juguetón que disfruta de la compañía humana y las caricias. Mientras espera ser encontrado, está disponible para un hogar temporal donde pueda recibir atención y cuidados. Su tamaño mediano y su naturaleza amigable lo hacen ideal para hogares que puedan ofrecerle un espacio seguro y afectuoso mientras se reúne con su familia.",
    "imageUrl": "https://example.com/images/oliver.jpg",
    "facts": {
      "age": "3 años",
      "sex": "macho",
      "breed": "Siamés",
      "size": "mediano",
      "temperament": "cariñoso"
    },
    "extraInfo": {
      "curiosities": "Tiene un collar con su nombre y dirección."
    }
  },
  {
    "id": "gato-perdido-002",
    "name": "Bella",
    "shortDescription": "Gata extraviada con pelaje atigrado.",
    "description": "Bella es una preciosa gata con pelaje atigrado que se extravió en un vecindario cercano. Es bastante amigable y se muy lleva bien con otras mascotas. Mientras busca a su familia, Bella está disponible para ser adoptada por una familia que pueda ofrecerle un hogar temporal lleno de cariño y juegos. Es ideal para hogares con otros animales o niños pequeños. Bella necesita un entorno amoroso y seguro mientras se reúne con su familia, o una nueva familia que le brinde un hogar permanente.",
    "imageUrl": "https://example.com/images/bella-perdida.jpg",
    "facts": {
      "age": "2 años",
      "sex": "hembra",
      "breed": "Maine Coon",
      "size": "mediana",
      "temperament": "amigable"
    },
    "extraInfo": {
      "curiosities": "Le encanta jugar con plumas."
    }
  },
  {
    "id": "gato-perdido-003",
    "name": "Charlie",
    "shortDescription": "Gato gris perdido buscando a su dueño.",
    "description": "Charlie es un lindo gato con pelaje gris que se perdió en el vecindario. Busca a su dueño con urgencia y está un poco asustado. Es un gato bastante tranquilo, reservado y amoroso que necesita un hogar donde pueda sentirse completamente seguro y querido. Mientras espera ser encontrado por su familia, Charlie está disponible para un hogar temporal que pueda ofrecerle tranquilidad, cuidados y muchas caricias. Su naturaleza calmada y su tamaño mediano lo hacen ideal para un entorno hogareño, tranquilo y afectuoso.",
    "imageUrl": "https://example.com/images/charlie-perdido.jpg",
    "facts": {
      "age": "4 años",
      "sex": "macho",
      "breed": "British Shorthair",
      "size": "mediano",
      "temperament": "tranquilo"
    },
    "extraInfo": {
      "curiosities": "Es muy cariñoso una vez que se siente seguro."
    }
  },
  {
    "id": "gato-perdido-004",
    "name": "Mittens",
    "shortDescription": "Gata blanca perdida, busca a su familia.",
    "description": "Mittens es una linda gata blanca con ojos verdes que se perdió en el área local. Es muy cariñosa y se adapta bastante bien a diferentes entornos. Mientras espera a ser encontrada por su familia, Mittens está disponible para ser adoptada por una familia que pueda ofrecerle un hogar temporal con amor y cuidados. Su pelaje blanco y su carácter amistoso la hacen ideal para cualquier hogar que pueda proporcionarle un lugar seguro, amoroso y cálido hasta que se reúna con su familia.",
    "imageUrl": "https://example.com/images/mittens.jpg",
    "facts": {
      "age": "3 años",
      "sex": "hembra",
      "breed": "Siberiano",
      "size": "mediana",
      "temperament": "amigable"
    },
    "extraInfo": {
      "curiosities": "Sabe abrir puertas con las patas."
    }
  },

  // Crías Recién Nacidas
  {
    "id": "gato-cria-001",
    "name": "Milo",
    "shortDescription": "Cachorro de gato juguetón busca hogar.",
    "description": "Milo es un cachorro de gato con pelaje rayado que fue encontrado junto a su madre. Es muy juguetón y curioso, ideal para una familia que busque un compañero activo y afectuoso. Milo está listo para ser adoptado por una familia que pueda ofrecerle el cuidado y atención necesarios para crecer feliz y saludable. Su energía y carácter juguetón lo convierten en una excelente opción para quienes buscan un gato joven y lleno de vida que pueda alegrar su hogar.",
    "imageUrl": "https://example.com/images/milo.jpg",
    "facts": {
      "age": "2 meses",
      "sex": "macho",
      "breed": "Bengalí",
      "size": "pequeño",
      "temperament": "juguetón"
    },
    "extraInfo": {
      "curiosities": "Le encanta explorar y jugar con cajas."
    }
  },
  {
    "id": "gato-cria-002",
    "name": "Lily",
    "shortDescription": "Cachorra de gata dulce en busca de amor.",
    "description": "Lily es una cachorra de gata con pelaje blanco y ojos azules que fue rescatada de la calle. Esta pequeña es muy dulce y cariñosa, ideal para familias que buscan una compañera afectuosa y tierna. Lily está lista para ser adoptada por un hogar donde pueda recibir todo el cariño y cuidado que necesita para crecer saludable y feliz. Su personalidad encantadora y su tamaño pequeño la hacen perfecta para cualquier hogar que pueda ofrecerle un lugar seguro, cálido y amoroso.",
    "imageUrl": "https://example.com/images/lily.jpg",
    "facts": {
      "age": "3 meses",
      "sex": "hembra",
      "breed": "Persa",
      "size": "pequeña",
      "temperament": "dulce"
    },
    "extraInfo": {
      "curiosities": "Disfruta de jugar con plumas y pelotas."
    }
  },
  {
    "id": "gato-cria-003",
    "name": "Oliver",
    "shortDescription": "Cachorro de gato curioso y activo busca hogar.",
    "description": "Oliver es un pequeño cachorro de gato con pelaje atigrado que fue rescatado de un refugio. Es curioso, amoroso y activo, ideal para familias que buscan un compañero joven, cariñoso y juguetón. Oliver está listo para ser adoptado y necesita un hogar donde pueda recibir el amor, juegos y atención necesarios para crecer saludable y feliz. Su energía y curiosidad lo hacen perfecto para quienes disfrutan de interactuar con un gato activo y alegre, aportando diversión y mucho amor a su hogar.",
    "imageUrl": "https://example.com/images/oliver-cria.jpg",
    "facts": {
      "age": "2 meses",
      "sex": "macho",
      "breed": "Abisinio",
      "size": "pequeño",
      "temperament": "curioso"
    },
    "extraInfo": {
      "curiosities": "Sabe escalar muebles con agilidad."
    }
  },
  {
    "id": "gato-cria-004",
    "name": "Sophie",
    "shortDescription": "Cachorra de gata juguetona busca un hogar cariñoso.",
    "description": "Sophie es una cachorra de gata con un lindo pelaje gris claro que fue rescatada junto a sus hermanos. Es juguetona y cariñosa, ideal para una familia que pueda ofrecerle el cuidado, seguridad y atención que necesita. Sophie está lista para ser adoptada y se adapta muy bien a diferentes entornos. Su energía y afecto hacia las personas la convierten en una excelente opción para quienes buscan una tierna compañera joven y llena de vida que pueda alegrar su hogar pero sobre todo dar mucho amor.",
    "imageUrl": "https://example.com/images/sophie.jpg",
    "facts": {
      "age": "3 meses",
      "sex": "hembra",
      "breed": "Ragdoll",
      "size": "pequeña",
      "temperament": "juguetona"
    },
    "extraInfo": {
      "curiosities": "Le encanta jugar con ratones de juguete."
    }
  }
];

export default petsData;
