import axios from 'axios';
import { ICountry } from './models';

const API_URL = 'https://restcountries.com/v3.1/all';

export const fetchCountries = async (): Promise<ICountry[]> => {
  try {
    const response = await axios.get<ICountry[]>(API_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Erro ao buscar países: ${error.message}`);
    } else {
      console.error('Um erro inesperado ocorreu:', error);
    }
    return [];
  }
};