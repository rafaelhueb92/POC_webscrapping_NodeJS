const scrap = require("./src");
const url = "https://lista.mercadolivre.com.br/fone-de-ouvido-beats-original#D[A:fone-de-ouvido-beats-original]";
scrap(url).then(res => console.log(res));