
// Enum para as regiões dos países
export enum Region {
    Africa = 'Africa',
    Americas = 'Americas',
    Asia = 'Asia',
    Europe = 'Europe',
    Oceania = 'Oceania',
}


// Interface para um país
export interface ICountry {
    name: {
        common: string;
    };
    region: Region;
    capital: string[];
    population: number;
    flags: {
        svg: string;
        png: string;
    }
}