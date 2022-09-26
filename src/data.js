const data = [
  {
    id: 1,
    title: "Croissant de Almendras",
    price: 590,
    detail: "Croissant clásica francesa, rellena de pasta del Almendras.",
    img: "https://s3.amazonaws.com/storage.wobiz.com/156/156475/images/Original/1617223644_8f95399b5b1407fad2681f0f7a155af8.156475.jpeg",
  },
  {
    id: 2,
    title: "Pañuelitos de pastelera",
    price: 540,
    detail: "Pañuelitos de hojaldre, rellenos de pastelera y fruta.",
    img: "https://s3.amazonaws.com/storage.wobiz.com/156/156475/images/Large/1584565859_1e9f42dabe70ae51fc35967f493959d5.156475.jpeg",
  },
  {
    id: 3,
    title: "Torta Matilda",
    price: 990,
    detail: "Torta de chocolate amargo relleno de ganache de chocolate",
    img: "https://s3.amazonaws.com/storage.wobiz.com/156/156475/images/Large/1617226252_4220a031894d636a52c8025a4a501674.156475.jpeg",
  },
  {
    id: 4,
    title: "Carrot Cake",
    price: 700,
    detail: "Húmeda, dulce en su medida y con el crocante de las nueces, la carrot cake es una gran opción para cualquier momento del día. ",
    img: "https://s3.amazonaws.com/storage.wobiz.com/156/156475/images/Original/1619115830_6f25f483b664471da1dd83f5469d551d.156475.png",
  },
  {
    id: 5,
    title: "Brownie con merengue",
    price: 750,
    detail: "Brownie con Dulce de Leche, Merengue y Chocolate",
    img: "https://s3.amazonaws.com/storage.wobiz.com/156/156475/images/Original/1617223516_d12b0f964373120dda528ad059243a50.156475.jpeg",
  },
  {
    id: 6,
    title: "Budin de limón",
    price: 490,
    detail: "Budin de limón con glaceado",
    img: "https://s3.amazonaws.com/storage.wobiz.com/156/156475/images/Original/1627223389_332577f8c53a30e57ed4863e82bfcd89.156475.jpeg",
  },
  {
    id: 7,
    title: "Alfajor sablee de nuez",
    price: 540,
    detail: "Masa sablee de Nuez, dulce de leche y nuez",
    img: "https://s3.amazonaws.com/storage.wobiz.com/156/156475/images/Original/1630331484_2b708d6271a69924b5c53ebc052adf14.156475.jpeg",
  },
  {
    id: 8,
    title: "Alfajor sablee de almendras",
    price: 450,
    detail: "Tapitas de sablé de Almendras, rellenas de dulce de leche",
    img: "https://s3.amazonaws.com/storage.wobiz.com/156/156475/images/Original/1630334071_cb596429db1b6bf338a989a3868751ff.156475.jpeg",
  },
  {
    id: 9,
    title: "Alfajor de maicena",
    price: 540,
    detail: "Masa de maicena, rellena de dulce de leche",
    img: "https://s3.amazonaws.com/storage.wobiz.com/156/156475/images/Original/1630333858_ceb8982a091ba4f9b3385c49d50b2494.156475.jpeg"

  }
];

export default function getItems(){
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve (data);
        },2000);
    });
}


export function getSingleItems(id){
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve (data.find(item => item.id === id));
        },1500);
    });
}

