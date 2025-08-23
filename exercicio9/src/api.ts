import axios from 'axios';
import { ICountry } from './models';

const API_URL = "https://restcountries.com/v3.1/all?fields=name,region,capital,population,flags";

export async function fetchCountries(): Promise<ICountry[]> {
  try {
    const { data } = await axios.get<ICountry[]>(API_URL);
    return data;
  } catch (error) {
    console.error("Erro ao buscar países:", error);
    throw new Error("Falha ao carregar países.");
  }
}