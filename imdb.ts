import { Profesional } from "./profesional";
import { Movie } from "./movie"

class Imdb {
    public peliculas: Movie[]

    constructor(dato: Movie[]) {
        this.peliculas = dato;
    }
}

export { Imdb }