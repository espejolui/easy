export const ListRecipes = () => {
  const recipes = [
    {
      title: "Arroz con pollo",
      preparation:
        "En una olla grande, calienta un poco de aceite de oliva y sofríe la cebolla, el ajo y el pimienton picado. Añade las pechugas de pollo cortadas en trozos y dóralas. Agrega la zanahoria cortada en rodajas y cocina por unos minutos. Incorpora el arroz y remueve bien para que se impregne de los sabores. Vierte el tomate triturado y mezcla. Añade el caldo de pollo suficiente para cubrir todos los ingredientes y sazona con sal y pimienta. Deja cocinar a fuego medio-bajo hasta que el arroz esté tierno y el pollo esté bien cocido. Añade los guisantes y cocina por unos minutos más. Rectifica la sazón y sirve caliente.",
      photo: {
        url: "https://res.cloudinary.com/dhhq7geqh/image/upload/v1718758135/easyfood/arroz-de-pollo_jvvbhs.webp",
        alt: "Plato de Arroz con pollo",
      },
      ingredients: [
        { name: "Arroz", amount: "1 taza" },
        { name: "Pechugas de pollo", amount: "2 unidades" },
        { name: "Cebolla", amount: "1 unidad" },
        { name: "Ajo", amount: "2 dientes" },
        { name: "Pimiento rojo", amount: "1 unidad" },
        { name: "Zanahoria", amount: "1 unidad" },
        { name: "Guisantes", amount: "1 lata" },
        { name: "Tomate triturado", amount: "1 lata" },
        { name: "Caldo de pollo", amount: "al gusto" },
        { name: "Aceite de oliva", amount: "al gusto" },
        { name: "Sal", amount: "al gusto" },
        { name: "Pimienta", amount: "al gusto" },
      ],
    },
    {
      title: "Mote de queso",
      preparation: "",
      photo: {
        url: "https://res.cloudinary.com/dhhq7geqh/image/upload/v1718758135/easyfood/mote-de-queso_b1p2mv.webp",
        alt: "Plato de mote de queso costeño",
      },
      ingredients: [{ name: "", amount: "" }],
    },

    {
      title: "Bandeja paisa",
      preparation: "",
      photo: {
        url: "https://res.cloudinary.com/dhhq7geqh/image/upload/v1718758135/easyfood/bandeja-paisa_qrcllj.webp",
        alt: "Plaro de bandeja paisa",
      },
      ingredients: [{ name: "", amount: "" }],
    },
    {
      title: "Ajiaco",
      preparation: "",
      photo: {
        url: "https://res.cloudinary.com/dhhq7geqh/image/upload/v1718758135/easyfood/ajiaco_pg1boj.webp",
        alt: "Plato de Ajiaco",
      },
      ingredients: [{ name: "", amount: "" }],
    },
  ];

  return recipes;
};
