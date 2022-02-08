import { Profesional } from "./profesional";
import { Movie } from "./movie"
let pelicula1: Movie = new Movie("Kill Bill", 2003, "Estados Unidos", "Acción");
let actor1: Profesional = new Profesional("Alex", 32, "Maculino", 80, 1.78, "Verde", "Marron", "Asiatica", true, "Española", 2, "actor")
let actor2: Profesional = new Profesional("Pepe", 34, "Maculino", 82, 1.74, "Marron", "Azul", "Europea", true, "Española", 0, "actor")
let actor3: Profesional = new Profesional("Ana", 30, "Femenino", 60, 1.64, "Rubio", "negro", "Europea", true, "Española", 0, "actor")
let actores: Profesional[] = [actor1, actor2, actor3]
let peliculas: Movie[] = [pelicula1]

let director1: Profesional = new Profesional("Quentin Tarantino", 58, "Hombre", 72, 1.80, "Castaño", "Marron", "Cualquiera", false, "Inglesa", 13, "Director")
let escritor1: Profesional = new Profesional("javi", 28, "hombre", 70, 1.82, "Rubio", "Verdes", "Europa", false, "Española", 0, "Escritor")

pelicula1.setActors(actores);
pelicula1.setDirector(director1);
pelicula1.setWriter(escritor1);
pelicula1.setLaunguage("español");
pelicula1.setPlataform("Netflix");
pelicula1.setIsmcu(false);
pelicula1.setmainCharacterName("Uma Thurman");
pelicula1.setProducer("Miramax");

pelicula1.valorAtributos();

