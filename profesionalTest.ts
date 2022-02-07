import { Profesional } from "./profesional";

let actor1: Profesional = new Profesional("Alex", 32, "Maculino", 80, 1.78, "Verde", "Marron", "Asiatica", true, "Española", 2, "actor")
let actor2: Profesional = new Profesional("Pepe", 34, "Maculino", 82, 1.74, "Marron", "Azul", "Europea", true, "Española", 0, "actor")

console.log(actor1.valorAtributos());

console.log(actor2.valorAtributos());

