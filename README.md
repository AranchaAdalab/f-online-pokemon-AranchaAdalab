## Pokédex para Adalab

La app es el resultado de las dos primeras pruebas técnicas que forman el bloque de formación online de Adalab. Consiste en una pequeña enciclopedia de Pokémon con un buscador por nombre que da, en esta primera fase, 25 resultados. La ficha de detalle de cada Pokémon cuenta con el nombre, la fotografía, el pokémon desde el que ha evolucionado, el número y el tipo (o tipos) de cada uno. Además, clickando en cada una de ellas, se accede a una tarjeta de detalle con otra información como peso, altura, habilidades y evoluciones.

### `Herramientas`

La aplicación se ha creado con HTML, SCSS, JAVASCRIPT y REACT. Además, la información proviene de la API pública https://pokeapi.co/

### `Planteamiento del ejercicio`

PRUEBA TÉCNICA 1

Una primera fase en la que realizar dos peticiones encadenadas a la API (una para obtener el listado completo de Pokémon y otra con la información adicional de cada uno de ellos).

Una segunda fase en la que crear una estructura por componentes mucho más manejable (se muestra con detalle en el siguiente punto).

Una tercera fase en la que dar estilos a la aplicación.

PRUEBA TÉCNICA 2

Partiendo de la prueba anterior, se introduce nueva información en la ficha de cada pokémon y ahora se puede ver si éste es una evolución de otro y, si es este el caso, de cuál. 

Además, a través de Router, ahora clickando en cada ficha nos lleva a otra tarjeta más grande y con más información del pokémon. 

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

___Home.js

___Index.js

___Index.scss


## Si quieres disfrutar de la aplicación o mejorarla puedes clonar el respositorio con el siguiente enlace
https://github.com/Adalab/f-online-pokemon-AranchaAdalab.git

**Nota: no olvides ejecutar npm install**

¡Gracias!
