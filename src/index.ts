import { Normal } from "./class/Normal";
import { VIP } from "./class/VIP";
import { Camarote } from "./class/Camarote";

// Ingresso Normal
const bNormal = new Normal(
    43
)
bNormal.ImprimeValor()
//-------------------------------

//Ingresso VIP
const bVIP = new VIP(
    43,
    37
)
bVIP.ImprimeValor()
//-------------------------------

//Ingresso Camarote
const bCamarote = new Camarote(
    43,
    90
)
bCamarote.ImprimeValor()