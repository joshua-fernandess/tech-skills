
import { fetchCountries } from './api';
import { CountryService } from './service';
import { ICountry, Region } from './models';

const main = async () => {
  console.log('Buscando dados de países...');
  const allCountries: ICountry[] = await fetchCountries();

  if (allCountries.length === 0) {
    console.log('Não foi possível obter dados. Encerrando.');
    return;
  }

  const service = new CountryService(allCountries);

  // Exemplo de pesquisa por nome
  console.log('\n Países que incluem "Brazil" no nome ');
  const searchResults =service.searchByName('Brazil');
  console.log(searchResults.map(country => country.name.common));

  // Exemplo de filtro por região
  console.log('\n Países da região "Americas" ');
  const regionResults = service.filterByRegion(Region.Americas);
  console.log(regionResults.map(country => country.name.common));

  // Exemplo de pesquisa com termo inexistente
  console.log('\n Países que incluem "jshd" no nome ');
  const noResults = service.searchByName('jshd');
  console.log(`Encontrados ${noResults.length} resultados.`);
};

main();