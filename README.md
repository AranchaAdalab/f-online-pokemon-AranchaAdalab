## Pokédex para Adalab

Esta es la primera de las siete pruebas técnicas que forman el bloque de formación online de Adalab. Consiste en una pequeña enciclopedia de Pokémon con un buscador por nombre que da, en esta primera fase, 25 resultados. La ficha de detalle de cada Pokémon cuenta con el nombre, la fotografía, el número y el tipo (o tipos) de cada uno. 

### `Herramientas`

La aplicación se ha creado con HTML, SCSS, JAVASCRIPT y REACT. Además, la información proviene de la API pública https://pokeapi.co/

### `Planteamiento del ejercicio`

Una primera fase en la que realizar dos peticiones encadenadas a la API (una para obtener el listado completo de Pokémon y otra con la información adicional de cada uno de ellos).

Una segunda fase en la que crear una estructura por componentes mucho más manejable (se muestra con detalle en el siguiente punto).

Una tercera fase en la que dar estilos a la aplicación.

### `Estructura por componentes`

src

___App

-------------App.js

-------------App.scss

___Filter

-------------Filter.js

-------------Filter.scss

___PokemonDetail

-------------PokemonDetail.js

-------------PokemonDetail.scss

___PokemonItem

-------------PokemonItem.js

-------------PokemonItem.scss

___PokemonList

-------------PokemonList.js

-------------PokemonList.scss

___Services

-------------Petition.js

___Index.js

___Index.scss


## Si quieres disfrutar de la aplicación o mejorarla puedes clonar el respositorio con el siguiente enlace
https://github.com/Adalab/f-online-pokemon-AranchaAdalab.git

**Nota: no olvides ejecutar npm install**

¡Gracias!
