import { Profesional } from "./profesional";

class Movie {
    public title: string
    public releaseYear: number
    public actors: Profesional[]
    public naciolality: string
    public director: Profesional
    public writer: Profesional
    public language: string
    public plataform: string
    public isMCU: boolean
    public mainCharacterName: string
    public producer: string
    public distributor: string
    public genre: string

    constructor(title: string, releaseYear: number, nacionality: string, genre: string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors;
        this.naciolality = nacionality;
        this.director;
        this.writer;
        this.language;
        this.plataform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre = genre;
    }

    public setActors(valor: Profesional[]) {
        this.actors = valor
    }

    public setDirector(valor: Profesional) {
        this.director = valor
    }

    public setWriter(valor: Profesional) {
        this.writer = valor
    }

    public setLaunguage(valor: string) {
        this.language = valor
    }

    public setPlataform(valor: string) {
        this.plataform = valor
    }

    public setIsmcu(valor: boolean) {
        this.isMCU = valor
    }

    public setmainCharacterName(valor: string) {
        this.mainCharacterName = valor
    }

    public setProducer(valor: string) {
        this.producer = valor
    }

    public valorAtributos(): void {

        console.log(this.title);
        console.log(this.releaseYear);
        console.log(this.actors);
        console.log(this.naciolality);
        console.log(this.director);
        console.log(this.writer);
        console.log(this.language);
        console.log(this.plataform);
        console.log(this.isMCU);
        console.log(this.mainCharacterName);
        console.log(this.producer);
        console.log(this.genre);

    }
}

export { Movie }