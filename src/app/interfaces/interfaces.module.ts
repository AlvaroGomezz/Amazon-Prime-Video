export interface IHeader{
    nombre : string
    url    : string
}

export interface IData {
    episodios?:        Episodio[];
    _id?:              string;
    href?:             any;
    title?:            string;
    src?:              string;
    srcVideo?:         string;
    srcPrime?:         string;
    reproducir?:       string;
    prime?:            boolean;
    description?:      string;
    duration?:         string;
    year?:             number;
    subtitles?:        boolean;
    age?:              number | string;
    original?:         boolean;
    amazonOriginal?:   boolean;
    srcTitle?:         string;
    titulo?:           string;
    top10?:            boolean;
    topNumber?:        string;
    unaTemporada?:     boolean;
    reproducirInside?: string;
    imdb?:             boolean;
    notaImdb?:         number;
    xRay?:             boolean;
    hdr?:              boolean;
    uhd?:              boolean;
    ad?:               boolean;
    data?:             MovieData[];
    imagen?:           string;
    numTemporada?:     string;
    numEpisodios?:     string;
}

export interface ISliders1 {
    data: ISliders;
}

export interface ISliders {
    _id:    string;
    prime:  boolean;
    title:  string;
    slides?: IData[];
}

export interface ISliderTop1 {
    data: ISliderTop[];
}

export interface ISliderTop {
    _id?:         string;
    titulo:      string;
    href:        string;
    src:         string;
    descripcion: string;
    buttons:     IButtons;
    videoSrc:    string;
}

export interface IButtons {
    ver:      boolean;
    lista:    boolean;
    detalles: boolean;
}

export interface MovieData {
    title:   Title;
    name?:   string;
    genero?: string;
    thing?:  string;
    mas?:    Mas;
}

export enum Mas {
    Más = "más...",
}

export enum Title {
    Dirección = "Dirección",
    Géneros = "Géneros",
    IdiomasDeAudio = "Idiomas de audio",
    Reparto = "Reparto",
    Subtítulos = "Subtítulos",
}

export interface Episodio {
    numEp:       number;
    titulo:      string;
    age:         number | string;
    img:         string;
    fecha?:      string;
    duration:    string;
    description: string;
}