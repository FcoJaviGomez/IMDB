import { Profesional } from "./profesional";
import { Movie } from "./movie"
import { Imdb } from "./imdb";

let pelicula1: Movie = new Movie("Harry Potter", 2003, "Estados Unidos", "Fantasia");

let director1: Profesional = new Profesional("Reina", 58, "Mujer", 72, 1.80, "Castaño", "Marron", "Cualquiera", false, "Inglesa", 13, "Director")
let escritor1: Profesional = new Profesional("Darius", 28, "hombre", 70, 1.82, "Rubio", "Verdes", "Europa", false, "Española", 0, "Escritor")

let actor1: Profesional = new Profesional("Javi", 32, "Maculino", 80, 1.78, "Verde", "Marron", "Asiatica", true, "Española", 2, "actor")
let actor2: Profesional = new Profesional("Lorena", 34, "Femenino", 82, 1.74, "Marron", "Azul", "Europea", true, "Española", 0, "actor")
let actor3: Profesional = new Profesional("Lux", 30, "Femenino", 60, 1.64, "Rubio", "negro", "Europea", true, "Española", 0, "actor")
let actores: Profesional[] = [actor1, actor2, actor3]



pelicula1.setActors(actores);
pelicula1.setDirector(director1);
pelicula1.setWriter(escritor1);
pelicula1.setLaunguage("español");
pelicula1.setPlataform("Netflix");
pelicula1.setIsmcu(false);
pelicula1.setmainCharacterName("Uma Thurman");
pelicula1.setProducer("Miramax");





let pelicula2: Movie = new Movie("Kill Bill", 2003, "Estados Unidos", "Acción");
let actor4: Profesional = new Profesional("Mis", 32, "Maculino", 80, 1.78, "Verde", "Marron", "Asiatica", true, "Española", 2, "actor")
let actor5: Profesional = new Profesional("Yummi", 34, "Maculino", 82, 1.74, "Marron", "Azul", "Europea", true, "Española", 0, "actor")
let actor6: Profesional = new Profesional("Ana", 30, "Femenino", 60, 1.64, "Rubio", "negro", "Europea", true, "Española", 0, "actor")
let actores2: Profesional[] = [actor4, actor5, actor6]


let director2: Profesional = new Profesional("Draven", 58, "Hombre", 72, 1.80, "Castaño", "Marron", "Cualquiera", false, "Inglesa", 13, "Director")
let escritor2: Profesional = new Profesional("Viego", 28, "hombre", 70, 1.82, "Rubio", "Verdes", "Europa", false, "Española", 0, "Escritor")

pelicula2.setActors(actores2);
pelicula2.setDirector(director2);
pelicula2.setWriter(escritor2);
pelicula2.setLaunguage("ingles");
pelicula2.setPlataform("HBO");
pelicula2.setIsmcu(true);
pelicula2.setmainCharacterName("Uma Thurman");
pelicula2.setProducer("Miramax");





let peliculas: Movie[] = [pelicula1, pelicula2]


let x: Imdb = new Imdb(peliculas)


console.log(x);
