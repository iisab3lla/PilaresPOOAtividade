import { Cachorro } from "./class 3/Cachorro"
import { Cavalo } from "./class 3/Cavalo"
import { Gato } from "./class 3/Gato"

// Detalhes: Cachorro
const aCachorro = new Cachorro (
    "Sombra",
    "Husky Siberiano",
    "Branco e Cinza",
    26.2,
    60,
    "Latido"
)
aCachorro.imprimirAnimais()
//----------------------------------

// Detalhes: Cavalo
const aCavalo  = new Cavalo (
    "Trovão",
    "Frísio",
    "Preto",
    420,
    190,
    "40/48km"
)
aCavalo.imprimirAnimais()
//----------------------------------

// Detalhes: Gato
const aGato = new Gato (
    "Athena",
    "Bombaim",
    "Preto",
    5,
    30,
    "Agilidade"
)
aGato.imprimirAnimais()
//----------------------------------