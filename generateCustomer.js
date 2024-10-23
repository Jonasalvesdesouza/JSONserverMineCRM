const fs = require("fs");

/*
  Para gerar os dados digite node generateData.js
 */

function generateRandomData() {
  const names = [];

  const prefixos = [
    "Tech",
    "Global",
    "Alpha",
    "Innovative",
    "Dynamic",
    "NextGen",
  ];
  const sufixos = [
    "Solutions",
    "Systems",
    "Services",
    "Networks",
    "Enterprises",
    "Consulting",
  ];

  function gerarNomeEmpresa() {
    const prefixo = prefixos[Math.floor(Math.random() * prefixos.length)];
    const sufixo = sufixos[Math.floor(Math.random() * sufixos.length)];
    return `${prefixo} ${sufixo}`;
  }

  for (let i = 0; i < 10; i++) {
    names.push(gerarNomeEmpresa());
  }

  const emails = [
    "example1@gmail.com",
    "example2@yahoo.com",
    "example3@hotmail.com",
    "example4@outlook.com",
    "example5@icloud.com",
  ];
  const phones = [
    "(11) 91234-5678",
    "(21) 99876-5432",
    "(31) 98765-4321",
    "(41) 95678-1234",
    "(51) 93456-7890",
  ];
  const addresses = [
    "Rua A, 123, Centro",
    "Avenida B, 456, Bairro",
    "Travessa C, 789, Vila",
    "Estrada D, 1011, Zona Rural",
    "Largo E, 1213, Cidade",
  ];

  const statuses = [
    "start",
    "Manufacturing",
    "Preparation for expedition",
    "dispatched",
  ];

  const objects = [];

  for (let i = 0; i < 30; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomEmail = emails[Math.floor(Math.random() * emails.length)];
    const randomPhone = phones[Math.floor(Math.random() * phones.length)];
    const randomAddress =
      addresses[Math.floor(Math.random() * addresses.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    const randomObject = {
      cod: `000${i + 1}`,
      storage: `Storage${Math.floor(Math.random() * 100)}`,
      name: randomName,
      email: randomEmail,
      phone: randomPhone,
      address: randomAddress,
      status: randomStatus,
    };

    objects.push(randomObject);
  }

  return objects;
}

const randomObjects = generateRandomData();
const jsonData = JSON.stringify(randomObjects, null, 2);

// Salvar os dados em um arquivo
fs.writeFileSync("data.json", jsonData);
console.log("Dados gerados e salvos em data.json");
