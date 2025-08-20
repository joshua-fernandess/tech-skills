import { ICountry, Region } from "./models";

export class CountryService {
  private countries: ICountry[] = [];

  constructor(countries: ICountry[]) {
    this.countries = countries;
  }

  public get allCountries(): ICountry[] {
    return this.countries;
  }

  public searchByName(query: string): ICountry[] {
    const searchTerm = query.toLowerCase();
    return this.countries.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
  }

  public filterByRegion(region: Region): ICountry[] {
    return this.countries.filter(country => country.region === region);
  }
}