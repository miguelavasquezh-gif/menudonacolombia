/* ============================================================
   DOÑA COLOMBIA — FUENTE ÚNICA DE DATOS DEL MENÚ
   ============================================================
   Este archivo es la ÚNICA fuente de verdad para:
     - Categorías del menú (nombre, ícono, imagen de portada)
     - Platos de cada categoría (nombre, precio, imagen, descripción EN/ES)
     - Imágenes del carrusel publicitario

   CÓMO AGREGAR FOTOS REALES:
     1. Guarda la foto en la carpeta correspondiente:
          img/platos/    -> fotos de cada plato
          img/carrusel/  -> fotos publicitarias del carrusel
     2. Escribe la ruta exacta en el campo "img" del plato o slide.
     3. Si el archivo no existe o no carga, la app muestra
        automáticamente un ícono de respaldo (emoji) — nunca se rompe.

   CÓMO AGREGAR/EDITAR UN PLATO:
     Solo agrega un objeto dentro del arreglo "items" de la categoría:
       {
         name: "Nombre del plato",
         price: "$00.00",
         icon: "🍽",                 // emoji de respaldo si no hay foto
         img: "img/platos/xxx.jpg",  // ruta de la foto (opcional)
         desc: { en: "...", es: "..." }
       }

   NOTA: Las categorías que no venían con información original en el
   menú (todas menos "À la Carte") tienen 2-3 platos de EJEMPLO
   marcados claramente. Reemplázalos por el contenido real cuando
   lo tengas — la estructura ya queda funcionando.
   ============================================================ */

const MENU_DATA = {

  /* ---------- CARRUSEL PUBLICITARIO (arriba del botón "Back to Menu") ---------- */
  carousel: [
    {
      img: "img/carrusel/arepaschorizo.png",
      icon: "🌟",
      caption: { en: "Arepita con chorizo", es: "Arepita con chorizo" }
    },
    {
      img: "img/carrusel/empanadas.png",
      icon: "🍢",
      caption: { en: "Perfect to Share", es: "Perfectas para compartir" }
    },
    {
      img: "img/carrusel/Antojo_morcilla.png",
      icon: "🍱",
      caption: { en: "unforgettable Morcilla", es: "Morcilla inolvidable" }
    }
/*     {
      img: "img/carrusel/promo-postres.jpg",
      icon: "🥐",
      caption: { en: "Fresh from our Bakery", es: "Recién hecho en nuestra Panadería" }
    } */
  ],

  /* ---------- CATEGORÍAS ---------- */
  categories: [

    {
      id: "breakfast",
      icon: "🍳",
      img: "img/platos/breakfast.jpg",
      name: { en: "Breakfast", es: "Desayunos" },
      items: [
        {
          name: "Tamal Tolimense",
          price: "$15.00",
          icon: "🍳",
          img: "img/platos/tamal.png",
          desc: {
            en: "Delicious corn dough filled with meat, rice, and vegetables, served in a banana leaf.",
            es: "Deliciosa masa de maíz relleno de carne, arroz, verduras, presentado en hoja de platano"
          }
        },
        {
          name: "Moñona",
          price: "$14.00",
          icon: "🍳",
          img: "img/platos/desayuno/monona.jpg",
          desc: {
            en: "Stewed or grilled meat, eggs prepared to your liking, rice mix frijol, and ripe plantain.",
            es: "Calentado de arroz con frijol, carne guisada o asada, huevos al gusto y platano maduro"
          }
        },
        {
          name: "Calentado",
          price: "$12.00",
          icon: "🍳",
          img: "img/platos/desayuno/calentado.jpg",
          desc: {
            en: "Traditional Colombian breakfast consisting of rice, meat, and beans and eggs prepared to your liking.",
            es: "Desayuno tradicional colombiano compuesto de arroz, frijoles y huevo frito"
          }
        },
        {
          name: "Huevos al gusto",
          price: "$10.00",
          icon: "🍳",
          img: "img/platos/huevos.jpg",
          desc: {
            en: "Scrambled or fried eggs, served with a portion of rice or an arepa",
            es: "Huevos revueltos, fritos/estrellados, acompañados con una porcion de arroz o arepa"
          }
        },
        {
          name: "Caldo de costilla",
          price: "$10.00",
          icon: "🍳",
          img: "img/platos/desayuno/caldo.jpg",
          desc: {
            en: "Soup with meat, potato, spices, and arepa",
            es: "Sopa de carne, papa, especias y arepa"
          }
        },
        {
          name: "Lechona",
          price: "$15.00",
          icon: "🍳",
          img: "img/platos/lechona.png",
          desc: {
            en: "A delicious traditional Colombian dish made with rice, peas, spices, and meat.",
            es: "Delicioso plato tradicional colombiano compuesto de arroz, arvejas, especias y carne"
          }
        }
      ]
    },

    {
      id: "appetizers",
      icon: "🥟",
      img: "img/platos/arepa_churrasco.png",
      name: { en: "Appetizers", es: "Entradas" },
      items: [
        {
          name: "Patacones con chicharrón",
          price: "$16.00",
          icon: "🥟",
          img: "img/platos/patacones.jpeg",
          desc: {
            en: "Crispy, fried, flattened plantain slices, served with pork rinds and guacamole.",
            es: "Crujientes rodajas de platano aplastados freidos acompañados de chicharrón y guacamole."
          }
        },
        {
          name: "Patacones con carne desmechada",
          price: "$16.00",
          icon: "🥟",
          img: "img/platos/patacon_carne.jpeg",
          desc: {
            en: "Crispy, fried, flattened plantain slices served with shredded meat",
            es: "Crujientes rodajas de platano aplastados freidos acompañados de carne desmechada"
          }
        },
        {
          name: "Arepa con churrasquito",
          price: "$16.00",
          icon: "🥟",
          img: "img/platos/arepa_churrasco.png",
          desc: {
            en: "Mini version of the traditional churrasco served with arepa",
            es: "Version mini del churrasco tradicional acompañado de arepa"
          }
        },
        {
          name: "Rellena con arepa",
          price: "$15.00",
          icon: "🥟",
          img: "img/platos/rellena_arepa.jpg",
          desc: {
            en: "Traditional Colombian combo featuring slices of Colombian blood sausage accompanied by arepas.",
            es: "Tradicional combo colombiano compuesto de rodajas de morcilla colombiana acompañada de arepas"
          }
        },
                {
          name: "Pincho colombiano",
          price: "$15.00",
          icon: "🥟",
          img: "img/platos/pincho_colombiano.jpeg",
          desc: {
            en: "A traditional Colombian appetizer consisting of grilled beef or chicken, served with guacamole and fried plantain (patacón).",
            es: "Tradicional aperitivo colombiano compuesto de carne o pollo asado presentado a la parrilla acompañado guacamole y patacon"
          }
        },
      ]
    },

    {
      id: "picadas",
      icon: "🍢",
      img: "img/platos/picada2pz.png",
      name: { en: "Picadas", es: "Picadas" },
      items: [
        {
          name: "Mediana 2 PZ",
          price: "$38.00",
          icon: "🍢",
          img: "img/platos/picada2pz.png",
          desc: {
            en: "Mixed grill picada to share for 2-3 people.",
            es: "Picada mixta de carnes para compartir entre 2-3 personas."
          }
        },
        {
          name: "Familiar 3-5 PZ",
          price: "$70.00",
          icon: "🍢",
          img: "img/platos/picadafamiliar.png",
          desc: {
            en: "Mixed grill picada perfect for the family",
            es: "Picada mixta de carnes perfecta para la familia"
          }
        },
        {
          name: "Suprema 8-15 PZ",
          price: "$110.00",
          icon: "🍢",
          img: "img/platos/picada_suprema.png",
          desc: {
            en: "Mixed grill picada perfect for your gathering",
            es: "Picada mixta de carnes perfecta para tu gran reunión"
          }
        },
      ]
    },
    {
      id: "combos",
      icon: "🍱",
      img: "img/platos/combo1.png",
      name: { en: "Combos", es: "Combos" },
      items: [
        {
          name: "Tamal con acompañamientos y bebidas",
          price: "$20.00",
          icon: "🍱",
          img: "img/platos/combo1.jpeg",
          desc: {
            en: "A traditional Colombian breakfast featuring a Tolima-style tamal, accompanied by bread or an arepa and a beverage such as hot chocolate or a cappuccino.",
            es: "Tradicional desayuno colombiano compuesto de tamal tolimense cuyos acompañamientos son pan o arepa y bebidas como chocolate o café con leche."
          }
        },
        {
          name: "Caldo con acompañamientos y bebidas",
          price: "$20.00",
          icon: "🍱",
          img: "img/platos/combos/combo2.jpg",
          desc: {
            en: "Traditional Colombian breakfast consisting of beef, potato, and spice soup, accompanied by bread or an arepa and beverages such as hot chocolate or a cappuccino.",
            es: "Tradicional desayuno colombiano compuesto de sopa de res, papa y especias acompañado de pan o arepa y bebidas como chocolate y cafe con leche."
          }
        }
      ]
    },

    {
      id: "carte",
      icon: "🍽",
      img: "img/platos/ejecutivo.jpeg",
      name: { en: "À la Carte", es: "Platos a la Carta" },
      items: [
        {
          name: "Bandeja Paisa",
          price: "$25.00",
          icon: "🍽",
          img: "img/platos/bandeja_paisa.png",
          desc: {
            en: "Grilled steak, pork crackling, fried egg, rice, black beans, sweet plantain and avocado.",
            es: "Bistec a la parrilla, chicharrón, huevo frito, arroz, frijoles negros, plátano maduro, aguacate."
          }
        },
        {
          name: "Churrasco",
          price: "$30.00",
          icon: "🍽",
          img: "img/platos/churrasco.jpg",
          desc: {
            en: "Juicy grilled steak served with fries, yuca and guacamole.",
            es: "Jugoso bistec a la plancha acompañado de papas fritas, yuca y guacamole."
          }
        },
        {
          name: "Pechuga Asada",
          price: "$20.00",
          icon: "🍽",
          img: "img/platos/carta/pechuga_asada.jpg",
          desc: {
            en: "Grilled chicken breast served with rice, fries and guacamole.",
            es: "Pechuga asada servida con arroz, papas fritas y guacamole."
          }
        },
        {
          name: "Pechuga en Champiñones",
          price: "$23.00",
          icon: "🍽",
          img: "img/platos/carta/pechuga_champinones.jpg",
          desc: {
            en: "Chicken breast in mushroom sauce, served with rice, French fries, and fried plantain slices..",
            es: "Pechuga de pollo en salsa de champiñones servida con arroz, papas fritas y patacones."
          }
        },
        {
          name: "Pechuga Hawaiana",
          price: "$23.00",
          icon: "🍽",
          img: "img/platos/carta/pechuga_hawaiana.jpg",
          desc: {
            en: "Chicken breast in mushroom sauce, served with rice, French fries, and fried plantain slices.",
            es: "Pechuga con jamón y piña servida con arroz, papas fritas y patacones."
          }
        },
        {
          name: "BBQ Ribs",
          price: "$21.00",
          icon: "🍽",
          img: "img/platos/costillas_bbq.png",
          desc: {
            en: "BBQ ribs served with fries and yuca.",
            es: "Costillas a la BBQ servidas con papas fritas y yuca."
          }
        },
        {
          name: "Carne Asada",
          price: "$20.00",
          icon: "🍽",
          img: "img/platos/carta/carne_asada.jpg",
          desc: {
            en: "Delicious grilled meat served with rice, french fries, plantains, and guacamole.",
            es: "Deliciosa carne a la plancha acompañada con arroz, papas fritas, plátano y guacamole."
          }
        },
        {
          name: "Sobrebarriga en Salsa",
          price: "$24.00",
          icon: "🍽",
          img: "img/platos/sobrebarriga.jpg",
          desc: {
            en: "Delicious stewed meat, served with cassava, potato, rice, avocado, and plantain.",
            es: "Deliciosa carne guisada, servida con yuca, papa, arroz, aguacate y plátano."
          }
        },
        {
          name: "Calderito Doña Colombia",
          price: "$23.00",
          icon: "🍽",
          img: "img/platos/calderito_dona_colombia.jpeg",
          desc: {
            en: "Rice, beans, pork crackling, chorizo, sweet plantain and pico de gallo.",
            es: "Arroz, frijoles, chicharrón, chorizo, maduro y pico de gallo."
          }
        },
        {
          name: "Calderito ropa vieja",
          price: "$23.00",
          icon: "🍽",
          img: "img/platos/calderito_ropa_vieja.jpeg",
          desc: {
            en: "Rice, beans, pork crackling, chorizo, sweet plantain and pico de gallo.",
            es: "Arroz, frijoles, chicharrón, chorizo, maduro y pico de gallo."
          }
        },
        {
          name: "Calderito pork",
          price: "$23.00",
          icon: "🍽",
          img: "img/platos/calderito_pork.jpeg",
          desc: {
            en: "Rice, beans, pork crackling, chorizo, sweet plantain and pico de gallo.",
            es: "Arroz, frijoles, chicharrón, chorizo, maduro y pico de gallo."
          }
        },
      ]
    },

    {
      id: "seafood",
      icon: "🐟",
      img: "img/platos/mojarrasmall.png",
      name: { en: "Seafood", es: "Mariscos" },
      items: [

        {
          name: "Mojarra frita small",
          price: "$20.00",
          icon: "🐟",
          img: "img/platos/mojarrasmall.png",
          desc: {
            en: "A traditional dish from the Colombian Caribbean featuring a small mojarra fish served with white rice, french fries, and fried plantain slices (tostones).",
            es: "Tradicional plato del caribe colombiano compuesto de pescado Mojarra pequeña acompañada de arroz blanco, papas fritas y toston"
          }
        },
        {
          name: "Mojarra frita Big",
          price: "$28.00",
          icon: "🐟",
          img: "img/platos/mojarrabig.png",
          desc: {
            en: "A traditional dish from the Colombian Caribbean featuring a large mojarra fish served with white rice, french fries, and fried plantain slices (tostones).",
            es: "Tradicional plato del caribe colombiano compuesto de pescado Mojarra grande acompañada de arroz blanco, papas fritas y toston"
          }
        },
      ]
    },

    {
      id: "weekendsoups",
      icon: "🍲",
      img: "img/platos/sopas/sancocho.jpg",
      name: { en: "Weekend Soups", es: "Sopas Fines de Semana" },
      items: [
        {
          name: "Sancocho",
          price: "$22.00",
          icon: "🍲",
          img: "img/platos/sopas/sancocho.jpg",
          desc: {
            en: "Delicious beef soup with plantain, cassava, potato, corn on the cob, and spices, served with rice, salad, sweet plantain and avocado.",
            es: "Deliciosa sopa de carne de res, platano, yuca, papas, mazorca, especias acompañada de arroz, ensalada, patacon y aguacate."
          }
        },
        {
          name: "Mondongo",
          price: "$22.00",
          icon: "🍲",
          img: "img/platos/mondongo.png",
          desc: {
            en: "A delicious soup made from tripe stew, boiled with plantain, cassava, potatoes, corn on the cob, and spices; served with rice, salad, sweet plantain and avocado.",
            es: "Deliciosa sopa a base de guiso de mondongo servido con platano, yuca, papas, mazorca, especias acompañada de arroz, ensalada, patacon y aguacate."
          }
        },
        {
          name: "Ajiaco Santafereño",
          price: "$22.00",
          icon: "🍲",
          img: "img/platos/ajiaco.png",
          desc: {
            en: "A delicious traditional Colombian soup made with shredded chicken, plantain, cassava, potatoes, corn on the cob, spices, and traditional herbs; served with rice, salad, sweet plantain and avocado.",
            es: "Deliciosa sopa tradicional colombiana a base de pollo desmenuzado con platano, yuca, papas, mazorca, especias, hierbas tradicionales, acompañada de arroz, ensalada, patacon y aguacate."
          }
        },
        {
          name: "Sancocho de pescado",
          price: "$22.00",
          icon: "🍲",
          img: "img/platos/sancocho_pescado.png",
          desc: {
            en: "A delicious traditional soup from the Colombian Caribbean made with fish, plantain, cassava, potatoes, corn on the cob, and spices; served with rice, salad, sweet plantain and avocado.",
            es: "Deliciosa sopa tradicional del caribe colombiano a base de pescado, platano, yuca, papas, mazorca, especias, acompañada de arroz, ensalada, patacon y aguacate."
          }
        }
      ]
    },

    {
      id: "fastfood",
      icon: "🍔",
      img: "img/platos/hamburguesa.jpeg",
      name: { en: "Fast Food", es: "Comida Rápida" },
      items: [
        {
          name: "Hamburguesa",
          price: "$15.00",
          icon: "🍔",
          img: "img/platos/hamburguesa.jpeg",
          desc: {
            en: "",
            es: ""
          }
        },
        {
          name: "Marzocada",
          price: "$18.50",
          icon: "🍔",
          img: "img/platos/mazorcada.png",
          desc: {
            en: "",
            es: ""
          }
        },
        {
          name: "Arepa rellena",
          price: "$16.00",
          icon: "🍔",
          img: "img/platos/arepa_rellena.jpeg",
          desc: {
            en: "",
            es: ""
          }
        },
        {
          name: "Salchipapa",
          price: "$18.50",
          icon: "🍔",
          img: "img/platos/salchipapa.png",
          desc: {
            en: "",
            es: ""
          }
        },
        {
          name: "Platano relleno",
          price: "$18.50",
          icon: "🍔",
          img: "img/platos/platano_relleno.png",
          desc: {
            en: "",
            es: ""
          }
        }
      ]
    },

    {
      id: "Additions",
      icon: "🧒",
      img: "img/platos/porciones.png",
      name: { en: "Additions", es: "Porciones" },
      items: [
        {
          name: "Papas criollas con chorizo o chicharron",
          price: "$7.00",
          icon: "🥟",
          img: "img/platos/papascriollas.png",
          desc: {
            en: "Traditional crispy Colombian yellow potatoes served with chorizo ​​or chicharrón.",
            es: "Tradicional papa colombiana amarilla crocantes acompañadas de chorrizo o chicharron"
          }
        }
      ]
    },

    {
      id: "drinks",
      icon: "🥤",
      img: "img/platos/jugos_leche.png",
      name: { en: "Drinks", es: "Bebidas" },
      items: [
        {
          name: "Colombiana",
          price: "$4.25",
          icon: "🥤",
          img: "img/platos/colombiana.png",
          desc: {
            en: "Colombian soft drink, served ice cold.",
            es: "Gaseosa Colombiana, servida bien fría."
          }
        },
        {
          name: "Pony Malta",
          price: "$4.25",
          icon: "🥤",
          img: "img/platos/ponymalta.png",
          desc: {
            en: "Malt beverage, a Colombian classic.",
            es: "Bebida de malta, un clásico colombiano."
          }
        },
        {
          name: "Milo",
          price: "$5.00",
          icon: "🥤",
          img: "img/platos/milo.png",
          desc: {
            en: "Chocolate malt drink, served cold.",
            es: "Bebida de chocolate con malta, servida fría."
          }
        },
        {
          name: "Coca Cola",
          price: "$3.00",
          icon: "🥤",
          img: "img/platos/cocacola.png",
          desc: {
            en: "Classic soft drink, served ice cold.",
            es: "Gaseosa clásica, servida bien fría."
          }
        },
        {
          name: "Sprite",
          price: "$3.00",
          icon: "🥤",
          img: "img/platos/sprite.png",
          desc: {
            en: "Lemon-lime soft drink, served ice cold.",
            es: "Gaseosa de limón, servida bien fría."
          }
        },
        {
          name: "Café",
          price: "$3.00",
          icon: "☕",
          img: "img/platos/cafe.png",
          desc: {
            en: "Freshly brewed Colombian coffee.",
            es: "Café colombiano recién preparado."
          }
        },
        {
          name: "Café con Leche",
          price: "$4.00",
          icon: "☕",
          img: "img/platos/cafe2.png",
          desc: {
            en: "Colombian coffee with milk.",
            es: "Café colombiano con leche."
          }
        },
        {
          name: "Chocolate",
          price: "$5.00",
          icon: "🍫",
          img: "img/platos/chocolate.png",
          desc: {
            en: "Traditional Colombian hot chocolate.",
            es: "Chocolate caliente tradicional colombiano."
          }
        },
        {
          name: "Chocolisto",
          price: "$5.00",
          icon: "🍫",
          img: "img/platos/chocolisto.png",
          desc: {
            en: "Chocolate milk drink.",
            es: "Bebida de chocolate con leche."
          }
        },
        {
          name: "Agua",
          price: "$1.00",
          icon: "💧",
          img: "img/platos/agua.png",
          desc: {
            en: "Bottled water.",
            es: "Agua embotellada."
          }
        },
        {
          name: "Jugo en Agua",
          price: "$6.00",
          icon: "🥤",
          img: "img/platos/jugos_agua.jpg",
          desc: {
            en: "Fresh fruit juice made with water, We offer a selection of tree tomato, lulo, soursop, strawberry, and passion fruit juices.",
            es: "Jugo natural preparado con agua, Ofrecemos una selección de jugos de tomate de árbol, lulo, guanábana, fresa y maracuyá."
          }
        },
        {
          name: "Jugo en Leche",
          price: "$7.00",
          icon: "🥤",
          img: "img/platos/jugos_leche.png",
          desc: {
            en: "Fresh fruit juice made with milk. We offer a selection of tree tomato, lulo, soursop, strawberry, and passion fruit juices.",
            es: "Jugo natural preparado con leche. Ofrecemos una selección de jugos de tomate de árbol, lulo, guanábana, fresa y maracuyá."
          }
        }
      ]
    },

    {
      id: "lunch",
      icon: "🍛",
      img: "img/platos/corrientazo.png",
      name: { en: "Lunch Special", es: "Almuerzo Corrientazo" },
      items: [
        {
          name: "Corrientazo del Día",
          price: "$15.00",
          icon: "🍛",
          img: "img/platos/corrientazo.png",
          desc: {
            en: "",
            es: ""
          }
        }
      ]
    },
    
    {
      id: "Ice Cream",
      icon: "🍛",
      img: "img/platos/",
      name: { en: "Icre Cream", es: "Helados" },
      items: [
        {
          name: "Corrientazo del Día",
          price: "$15.00",
          icon: "🍛",
          img: "img/platos/corrientazo.png",
          desc: {
            en: "",
            es: ""
          }
        }
      ]
    }

  ]
};
