# Buscador de personajes de Rick and Morty
<img alt="Gif de Rick" src="https://media.giphy.com/media/js0dt5JLCU01bvlt7d/giphy.gif" width=620px/>

## Objetivo
Este es el ejercicio de la evaluación final del módulo 03 de Adalab. El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, pudiendo filtrar por el nombre del personaje y acceder a una ficha con los detalles de cada uno. Hemos usado el framework React para su realización.

## Desarrollo

#### 1. Pintar el listado de personajes haciendo una petición a una api:
En primer lugar, hemos utilizado el servicio de  https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, hemos pintado el nombre, la foto y la especie.
 
#### 2. Filtrar los personajes por nombre:
Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos por nombre. Para eso, hemos añadido un <input> a la interfaz, de forma que al ir escribiendo un nombre quedan en la interfaz solo los personajes cuyo nombre contiene las letras escritas.

#### 3. Crear un detalle de cada tarjeta con React Router:
Hemos implementado una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información aparece a pantalla completa. Para hacer esto hemos usado rutas y React router. En la pantalla de detalle aparece además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

#### 4. Bonus que hemos realizado:
- Impedir que el navegador envíe una petición o cambie de ruta al dar a intro sobre el campo de texto vacío aplicando un prevent event default.
- Mostrar un mensaje de error si no hay ningún personaje que coincida con la búsqueda realizada.
- Filtar independientemente de que el texto introducido esté en mayúsuclas o minúsculas.
- Mostrar la especie y el estado de un personaje con un icono.
- Al entrar en el detalle de un personaje y volver al listado de personajes, se debe poder leer el texto que se había incluido inicialmente en el campo de texto.
- Posibilidad de filtrar por la especie del personaje.
- Ordenar el listado de personajes alfabéticamente por nombre.
- Añadir un loading mientras se carga la petición a la api.
- Añadir la música de Rick and Morty.

## Previsualización
