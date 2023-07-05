const ulElementActions = document.querySelector("#action-fig")
const ulElementPaintings = document.querySelector("#paintings")

const productsArray = [

  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle PlayStation",
    price: "R$99,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "GodZilla",
    price: "R$700,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
];

function createCard(elements, containerCard) {
      const createCardElement = document.createElement("li")
      const createCardImage = document.createElement("img")
      const createDivElement = document.createElement("div")
      const createH3Element = document.createElement("h3")
      const createPElement = document.createElement("p")

      createCardElement.className = "card"
      createDivElement.className = "data-card"

      createCardImage.src = elements.image
      createH3Element.innerText = elements.name
      createPElement.innerText = elements.price

      createCardElement.appendChild(createCardImage)
      createCardElement.appendChild(createDivElement)
      createDivElement.appendChild(createH3Element)
      createDivElement.appendChild(createPElement)

      containerCard.appendChild(createCardElement)
}

function generateCard(dataCard) {
  dataCard.map((elementsCard) => {
    if (elementsCard.type == "Action Figures") {
      createCard(elementsCard, ulElementActions)
    } else {
      createCard(elementsCard, ulElementPaintings)
    }
  })
}

generateCard(productsArray)


