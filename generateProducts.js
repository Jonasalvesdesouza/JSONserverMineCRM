const fs = require("fs");

/*
  Para gerar os dados de produtos, digite node generateProducts.js
*/

function generateRandomProducts() {
  const names = [];
  const categories = [
    "Electronics",
    "Furniture",
    "Accessories",
    "Stationery",
    "Equipment",
  ];

  // Função para gerar nomes de produtos
  function gerarNomeProduto() {
    const adjetivosMasculinos = [
      "Incredible",
      "New",
      "Exclusive",
      "Practical",
      "Stylish",
      "Durable",
      "Modern",
      "Compact",
      "Ergonomic",
      "Versatile",
      "Advanced",
      "Elegant",
      "Powerful",
      "Reliable",
      "Functional",
      "Affordable",
      "Innovative",
      "Classic",
      "Sophisticated",
      "Robust",
      "Efficient",
    ];

    const adjetivosFemininos = [
      "Incredible",
      "New",
      "Exclusive",
      "Practical",
      "Stylish",
      "Durable",
      "Modern",
      "Compact",
      "Ergonomic",
      "Versatile",
      "Advanced",
      "Elegant",
      "Powerful",
      "Reliable",
      "Functional",
      "Affordable",
      "Innovative",
      "Classic",
      "Sophisticated",
      "Robust",
      "Efficient",
    ];

    const substantivosMasculinos = [
      "Computer",
      "Desk",
      "Chair",
      "Printer",
      "Monitor",
      "Keyboard",
      "Mouse",
      "Folder",
      "Notebook",
      "Pen",
      "Projector",
      "Lamp",
      "Shelf",
      "Meeting table",
      "Whiteboard",
      "Calculator",
      "Organizer",
      "Headphone",
      "Laptop stand",
      "Speaker",
      "Router",
    ];

    const substantivosFemininos = [
      "Desk",
      "Chair",
      "Lamp",
      "Folder",
      "Notebook",
      "Pen",
      "Shelf",
      "Whiteboard",
      "Organizer",
      "Projector",
      "Calculator",
      "Speaker",
      "Headphone",
      "Laptop stand",
    ];

    // Escolher um gênero aleatório para os produtos
    const isMasculine = Math.random() < 0.5;

    const adjetivo = isMasculine
      ? adjetivosMasculinos[
          Math.floor(Math.random() * adjetivosMasculinos.length)
        ]
      : adjetivosFemininos[
          Math.floor(Math.random() * adjetivosFemininos.length)
        ];

    const substantivo = isMasculine
      ? substantivosMasculinos[
          Math.floor(Math.random() * substantivosMasculinos.length)
        ]
      : substantivosFemininos[
          Math.floor(Math.random() * substantivosFemininos.length)
        ];

    return `${adjetivo} ${substantivo}`;
  }

  // Gerar 20 nomes de produtos
  for (let i = 0; i < 20; i++) {
    names.push(gerarNomeProduto());
  }

  const objects = [];

  for (let i = 0; i < 60; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const randomPrice = (Math.random() * 1000).toFixed(2); // Gera um preço aleatório entre 0 e 1000
    const randomstock = Math.floor(Math.random() * 250); // Gera uma quantidade aleatória entre 0 e 9

    // Definir status com base na quantidade
    const randomStatus = randomstock > 0 ? "Available" : "Out of Stock";

    const randomObject = {
      cod: `000${i + 1}`,
      name: randomName,
      category: randomCategory,
      price: parseFloat(randomPrice),
      stock: randomstock, // Adiciona o campo quantidade
      status: randomStatus, // Status baseado na quantidade
    };

    objects.push(randomObject);
  }

  return objects;
}

const randomProducts = generateRandomProducts();
const jsonData = JSON.stringify(randomProducts, null, 2);

// Salvar os dados em um arquivo
fs.writeFileSync("products.json", jsonData);
console.log("Product data generated and saved in products.json");
