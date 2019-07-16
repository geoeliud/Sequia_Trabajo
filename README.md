# Sequia_Trabajo
Este repositorio corresponde al repositorio final de mi Trabajo para el Curso "PROGRAMACIÓN Y VISUALIZACIÓN DE DATOS USANDO NODEJS", Curso impartido en la Facultad de Arquitectura y Urbanismo de la Universidad de Chile por 2019 - Cristian Acuña (@codigonet).

A continuación una breve explicación de la Pagina Sequía Chile
Item:

1.- Concepto
  Aquí se realizó una breve introducción del fenómeno de la sequía, realizando un texto y citando a "National Drought Mitigation Center", aplicando los conceptos de las primeras 2 clases.

2.- Fotos
  Aquí se realizó una sección multimedia, referida a aquellas noticias dadas en prensa sobre el fenómeno de la sequía en los últimos años. Para lograrlo, se agregó un texto, además se utilizó el recurso de "Carrusel" para las fotografías, y en cada fotografía se agregó el link con la noticia de cada foto. Cada Imagen corresponde a algun escenario de la Sequía, dividido en Petorca (Zona Centro), Maule (zona Centro-Sur) y Araucanía (Zona Sur) dando cuenta del avance de la amenaza.

3.- Sección Gráfica
  En esta sección se realizó una muestra de datos obtenidos en https://datos.gob.cl/dataset/5237 pero dada la magnitud de los datos y de lo complejo de realizar un archivo que lo procese, se realizó un archivo llamado DATOS.CSV que aloja los datos procesados, sobre la cantidad de emergencias por región desde el 2008.
  Con ese archivo, se procedió a crear un archivo GRAFICA.JS (como lo realizado en las clases 4 y 5) que permite procesar esa información y darle ejecución a lo indicado. Como el HTML tiene llamada las librerías de CHARTJS agregué un grafico multimedia que permite no solo identificar la magnitud de las emergencias por sequía, sino que adempas cada barra permite revisar cuantas declaración han ocurrido.
  
  4.- Sección MAPA
  En esta sección se realizó la misma muestra de datos obtenidos en https://datos.gob.cl/dataset/5237, pero a diferencia de lo anterior, dada la complejidad del .JS en procesar la información, se procedió a realizar dos cosas:
  En primer lugar se configuró manualmente el archivo MAPA.JSON (a partir del realizado en clases), que permitiera revisar cada una de las regiones declaradas como emergencias agricolas. se borraron aquellas que no hay datos, y además se agregaron los datos del archivo DATOS.CSV como propiedades, quedando Región y Emergencias como propiedades.
  En segundo lugar, se realizó un MAPITA1.JS similar al visto en la clase 5, que permite procesar el archivo Mapa.JSON realizado para darle sentido geográfico en el mapa llamado en el HTML, a proposito de la conexión con la librería LEAFLET cargada en los SCRIPT. Con todo lo anterior, se obtuvo en el HTML un mapa que permite visualizar los mismos datos del gráfico.
  
 Palabras Finales:
 Particularmente en este ejercicio de realizar una pagina web, ha sido bastante complejo dado que no entendía en un principio la logica de programar, sin embargo, a traves de las clases y las rabias con el computador, logro entender como plasmar una idea en una pagina web, utilizando recursos fabulosos como CHARTJS o LEAFLET.
 Me quedé con la sensación de haber aprendido mejor a como procesar datos de tablas, dado que no logré aplicar un JS que pudiese procesar mi tabla de 200 datos por 4 columnas, pero gracias al entendimiendo de los JS usados, realicé una muestra creando un archivo "procesado".
 Tambien me hubiese gustado explorar más la ultima parte del curso, sobre llevar datos espaciales a una pagina web, a partir de librerias de codigos abiertos, intenté darle sentido a la ultima clase creando mi propio archivo MAPA.JSON y aplicando la misma logica del MAPA.JS, y estoy satisfecho de lograrlo de mucha ayuda, solo con las clases
 
 Para finalizar, hubiese sido mejor haber tenido un material de texto impreso para realizar cada una de los detalles de las clases, porque las dudas que tuve durante este proceso fueron procedimentales como conceptuales, pero dado el corto tiempo del curso, tampoco lo puede exijir.
 
 Saludos y espero haber demostrado los conocimientos del curso.
  
  

