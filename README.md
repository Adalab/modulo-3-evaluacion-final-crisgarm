# Buscador de personajes de Rick and Morty

Este es el ejercicio de la evaluación final del módulo 03 de Adalab. El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje. Hemos usado el framework React para su realización.

## Pasos la realización del ejercicio:

#### 1. Pintar el listado de personajes haciendo una petición a una api:
En primer lugar, hemos utilizado el servicio de  https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, hemos pintado el nombre, la foto y la especie.
 
#### 2. Filtrar los personajes por nombre:
Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos por nombre. Para eso, hemos añadido un <input> a la interfaz, de forma que al ir escribiendo un nombre quedan en la interfaz solo los personajes cuyo nombre contiene las letras escritas.

#### 3. Crear un detalle de cada tarjeta con React Router:
Hemos implementado una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información aparece a pantalla completa. Para hacer esto hemos usado rutas y React router. En la pantalla de detalle aparece además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

#### 4. Bonus que hemos realizado:
- Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o cambie la ruta sin querer.
- Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".
- El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
- Mostrar la especie y si un personajes está muerto con un icono.
- El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
- Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente
- Ordenar el listado de personajes alfabéticamente por nombre.
- Añadir audio a la página.
- Añadir un loading.
