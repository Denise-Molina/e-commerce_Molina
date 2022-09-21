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
];

export default function getItems(){
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve (data);
        },2000);
    });
}

