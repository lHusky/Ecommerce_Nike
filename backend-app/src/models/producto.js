const productos = [
    {
        id: 1,
        nombre: 'Nike V2K Run',
        categoria: 'Zapatillas para mujer',
        precio: 'S/ 599.90',
        tallas: ['5.5','6','6.5','7','7.5','8','8.5','9'],
        etiquetas: ['Mujer'],
        descripcion: 'Adelanta. Regresa. No importa, este calzado lleva lo retro al futuro. El V2K remasteriza todo lo que amas del Vomero con un look traído directamente de un catálogo de running de principios de siglo. Equípate con una combinación de elementos metalizados llamativos, malla transpirable y una entresuela con una estética perfectamente vintage. La entresuela de espuma de doble densidad y el talón estilo chunky garantizan comodidad vayas donde vayas.',
        detalle:'',
        datos_producto:'',
        colorMuestra:'Blanco Cumbre/Blanco/Marrón Verdoso Claro/Cromo',
        estilo:'FN6703-100',
        imagenes:[
            "https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dw91bf9a92/images/hi-res/197596759556_1_20240820-mrtPeru.jpg?sw=800&sh=800" 
            ,"https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dw6d36b079/images/hi-res/197596759556_2_20240820-mrtPeru.jpg?sw=800&sh=800"
            ,"https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dw6ce1e405/images/hi-res/197596759556_3_20240820-mrtPeru.jpg?sw=800&sh=800"
            ,"https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dwfc4fe034/images/hi-res/197596759556_4_20240820-mrtPeru.jpg?sw=800&sh=800"
            ,"https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dw5311c1de/images/hi-res/197596759556_5_20240820-mrtPeru.jpg?sw=800&sh=800"
            ,"https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dw745d8a87/images/hi-res/197596759556_6_20240820-mrtPeru.jpg?sw=800&sh=800"]
    },
    
    {
        id: 2,
        nombre: 'Nike V2K Run',
        categoria: 'Zapatillas para hombre',
        precio: 'S/ 569.90',
        tallas: ['6','6.5','7','7.5','8','8.5','9','9.5','10','10.5','11','11.5','12','12.5','13','14','15'],
        etiquetas: ['Hombre'],
        descripcion: 'Adelanta. Regresa. No importa, este calzado lleva lo retro al futuro. El V2K remasteriza todo lo que amas del Vomero con un look traído directamente de un catálogo de running de principios de siglo. Equípate con una combinación de elementos metalizados llamativos, detalles de plástico referenciales y una entresuela con una estética perfectamente vintage. Y el talón estilo chunky garantiza comodidad vayas donde vayas.',
        detalle:'',
        datos_producto:'',
        colorMuestra:'Verde Vintage/Pícea Mineral/Gris Lobo/Verde Vintage',
        estilo:'HJ4497-300',
        imagenes:["https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dw9f5d6653/images/hi-res/197598890035_1_20240820-mrtPeru.jpg?sw=800&sh=800"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwdee2fef3/images/hi-res/197598890035_2_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw981e0c74/images/hi-res/197598890035_3_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwa742f1e1/images/hi-res/197598890035_4_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwed770e63/images/hi-res/197598890035_5_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw6bbdd54f/images/hi-res/197598890035_6_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw498f8834/images/hi-res/197598890035_7_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwa00eaf14/images/hi-res/197598890035_8_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw60897b3a/images/hi-res/197598890035_9_20240820-mrtPeru.jpg"]
    },
    {
        id: 3,
        nombre: 'Nike Zoom Vomero 5',
        categoria: 'Zapatillas para mujer',
        precio: 'S/ 789.90',
        tallas: ['5.5','6','6.5','7','7.5','8','8.5','9'],
        etiquetas: ['Mujer'],
        descripcion: 'Forja un nuevo camino con el Zoom Vomero 5: tu favorito por su diseño complejo, profundo y fácil de combinar. Este calzado presume una estética vintage que es un toque retro perfecto de los runners de principios de siglo. El diseño de ricas capas incluye telas, cuero y detalles plásticos que se unen para crear uno de los calzados más geniales de la temporada.',
        detalle:'',
        datos_producto:'',
        colorMuestra:'Platino Puro/Marrón Verdoso Claro/Gris Lobo/Cromo',
        estilo:'FN6742-002',
        imagenes:["https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwbfea6e18/images/hi-res/197599849254_1_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw975c2aab/images/hi-res/197599849254_2_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw6c0ca31a/images/hi-res/197599849254_3_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw59103362/images/hi-res/197599849254_4_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw8e0d57b8/images/hi-res/197599849254_5_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw8037b3d8/images/hi-res/197599849254_6_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw77b840de/images/hi-res/197599849254_7_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw11fdc78d/images/hi-res/197599849254_8_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw5fcc9cf0/images/hi-res/197599849254_9_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwde5ea40d/images/hi-res/197599849254_10_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw8f4aedbd/images/hi-res/197599849254_11_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwf8fd0bd9/images/hi-res/197599849254_12_20240820-mrtPeru.jpg"]
    },
    {
        id: 4,
        nombre: 'Nike Zoom Vomero 5',
        categoria: 'Zapatillas para hombre',
        precio: 'S/ 749.90',
        tallas: ['7','7.5','8','8.5','9','9.5','10','10.5','11','12'],
        etiquetas: ['Hombre'],
        descripcion: 'Forja un nuevo camino con el Zoom Vomero 5: tu favorito por su diseño complejo, profundo y fácil de combinar. El diseño de ricas capas incluye telas, cuero y detalles plásticos que se unen para crear uno de los calzados más geniales de la temporada.',
        detalle:'',
        datos_producto:'',
        colorMuestra:'Marrón Verdoso Claro/Marrón Verdoso Claro',
        estilo:'HF1553-100',
        imagenes:["https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw30d96399/images/hi-res/197596209280_1_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwec44f777/images/hi-res/197596209280_2_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw77146ee5/images/hi-res/197596209280_3_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw9c09cf75/images/hi-res/197596209280_4_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw82e463e5/images/hi-res/197596209280_5_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw6b2f6958/images/hi-res/197596209280_6_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwa51d0064/images/hi-res/197596209280_7_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwf9c5fa4e/images/hi-res/197596209280_8_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwd4bca5ab/images/hi-res/197596209280_9_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw8584c985/images/hi-res/197596209280_10_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw35745572/images/hi-res/197596209280_11_20240820-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwe781f1e6/images/hi-res/197596209280_12_20240820-mrtPeru.jpg"]
    },
    {
        id: 5,
        nombre: 'Nike Air Force 1 Dance',
        categoria: 'Zapatillas para mujer',
        precio: 'S/ 679.90',
        tallas: ['5','5.5','6','6.5','7','7.5','8','8.5','9','9.5','10','10.5'],
        etiquetas: ['Mujer'],
        descripcion: 'Estos Air Force 1 están diseñados para el movimiento. Diseñados para satisfacer las necesidades de los bailarines, esta versión incluye amortiguación Air en el antepié para ofrecer una sujeción personalizable. La parte superior anatómica con una zona del tobillo más gruesa ayuda a sujetar el mediopié y el talón y que la suela exterior más flexible permite mostrar tu juego de pies con facilidad.',
        detalle:'',
        datos_producto:'',
        colorMuestra:'Summit White/Polvo De Fotones/Plata Metalizado',
        estilo:'FJ7409-101',
        imagenes:["https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw2af62fe9/images/hi-res/197600756663_1_20241003-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwd95f04d3/images/hi-res/197600756663_2_20241003-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwecf64c11/images/hi-res/197600756663_3_20241003-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwff2d5ce5/images/hi-res/197600756663_4_20241003-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw689ab341/images/hi-res/197600756663_6_20241003-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dweb327840/images/hi-res/197600756663_7_20241003-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwd4daedf4/images/hi-res/197600756663_8_20241003-mrtPeru.jpg"]
    },
    {
        id: 6,
        nombre: 'Nike Cortez Leather',
        categoria: 'Zapatillas para mujer',
        precio: 'S/ 399.90',
        tallas: ['5.5','6','6.5','7','7.5','8','8.5','9','9.5','10'],
        etiquetas: ['Mujer'],
        descripcion: 'Una palabra: tradición. Desde la actividad clásica de salir a correr hasta el fenómeno de la moda, siempre está presente el encanto retro de los Cortez, su entresuela suave como una esponja y sus detalles dentados, que se mantienen década tras década. Esta versión de cuero crea un look premium ganador.',
        detalle:'',
        datos_producto:'',
        colorMuestra:'Blanco/Vela/Oro Metalizado/Obsidiana',
        estilo:'HJ9343-100',
        imagenes:["https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dwce833ad3/images/hi-res/197596672756_1_20240820-mrtPeru.jpg?sw=800&sh=800"
            ,"https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dwcb6bddcb/images/hi-res/197596672756_2_20240820-mrtPeru.jpg?sw=800&sh=800"
            ,"https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dw50dfbbc0/images/hi-res/197596672756_3_20240820-mrtPeru.jpg?sw=800&sh=800"
            ,"https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dwb416136b/images/hi-res/197596672756_4_20240820-mrtPeru.jpg?sw=800&sh=800"
            ,"https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dw97b26ef5/images/hi-res/197596672756_5_20240820-mrtPeru.jpg?sw=800&sh=800"
            ,"https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dwb5290fd8/images/hi-res/197596672756_6_20240820-mrtPeru.jpg?sw=800&sh=800"
            ,"https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dw99fed075/images/hi-res/197596672756_7_20240820-mrtPeru.jpg?sw=800&sh=800"
            ,"https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dw489d8d8d/images/hi-res/197596672756_8_20240820-mrtPeru.jpg?sw=800&sh=800"]
    },
    {
        id: 7,
        nombre: 'Nike Court Royale 2 Low',
        categoria: 'Zapatillas para hombre',
        precio: 'S/ 229.90',
        tallas: ['7','7.5','8','8.5','9','9.5','10','10.5','11','11.5','12','13'],
        etiquetas: ['Hombre'],
        descripcion: 'El Nike Court Royale 2, que es un auténtico legado del pasado, posee el mismo diseño que ha tenido tanto éxito en las calles desde finales de los 70. La parte superior de cuero es llamativa y fácil de llevar, mientras que el diseño grande del logotipo Swoosh le da un toque retro. Además, la suela con diseño de espiguilla aporta un giro al look clásico.',
        detalle:'',
        datos_producto:'',
        colorMuestra:'Blanco/Verde Azul Verdoso Oscuro',
        estilo:'CQ9246-105',
        imagenes:["https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwef6ece4f/images/hi-res/195243487197_1_20240819-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw845287f5/images/hi-res/195243487197_2_20240819-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwc8265d70/images/hi-res/195243487197_3_20240819-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwa16cc101/images/hi-res/195243487197_4_20240819-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw10a2c53e/images/hi-res/195243487197_5_20240819-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw19630aff/images/hi-res/195243487197_6_20240819-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw14f3faa4/images/hi-res/195243487197_7_20240819-mrtPeru.jpg"
            ,"https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwd5bdfa35/images/hi-res/195243487197_8_20240819-mrtPeru.jpg"]
    }
]

export default productos;