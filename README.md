# TFG-AFrame
* Descargar todos los archivos .js y .html en una misma carpeta.
* Ejecutar desde la consola un cd para ir a esa carpeta.
* Sobre esa carpeta ejecutar un servidor python con el siguiente comando: python3 -m http.server
* Escribir en el navegador: localhost:8000/
* Cargar el archivo HTML que se quiere comprobar
***
Los siguientes archivos generan el escenario de manera estática con diferentes JSON descargados de la máquina virtual
* red_final_linear4.html
* red_final_linear8.html
* red_final_torus33.html
* red_final_tree_depth3.html
* red_final_tree_depth4.html
***
El siguiente archivo se utilizará directamente en la máquina virtual para pintar la red que esté arrancada en ese momento.
* red_final.html
* Para cargar este archivo habrá que arrancar la máquina virtual, seguir los pasos para poner a escuchar en el puerto adecuado
* Después se arrancará la red que queramos comprobar
* Se escribe en el navegador localhost:8000/red_final.html
