
1. Establecer rutas que sean públicas y privadas. El objetivo es que solo los usuarios que se encuentren registrados puedan acceder a las rutas privadas y las rutas publicas serán accedidas por cualquier usuario.

Para poder establecer rutas, primero debemos tener un registro de los usuarios y un login, con esto nosotros podemos establecer rutas privadas y públicas. 
![image](https://github.com/silviachaluisa/Productores/assets/133398724/d58091c7-5639-4f5a-b12d-a0fae4bfe3a9)

 
Para que podamos verificar al usuario, también debemos tener JWT(jsonWebtoken), lo que generará al usuario un token, para que pueda acceder a ciertas rutas. 
Para esto debemos crear una carpeta llamada auth.js dentro de la carpeta de middlewares 
![image](https://github.com/silviachaluisa/Productores/assets/133398724/500df985-090f-4c7a-aa97-141b8b4d98eb)

 
![image](https://github.com/silviachaluisa/Productores/assets/133398724/69babd53-fe6c-48be-8cdf-6d03839881a8)

 

Luego de haber creado el código que proporcionará tokens a los nuevos usuarios.
![image](https://github.com/silviachaluisa/Productores/assets/133398724/f3fd688e-5c10-439e-a795-658abc51476f)

Nos dirigimos a las rutas, y ya podemos separar entre rutas privadas y públicas.
Primero debemos importar verifytoken del archivo auth.js 
 
Y vamos añadiendo las rutas que deben ser privadas 

![image](https://github.com/silviachaluisa/Productores/assets/133398724/695994f6-163f-4c9c-956d-1afdde8c8108)

 
En nuestro caso, las rutas que van a ser privadas, son: 

Creación de nuevos productos, para esto se debe registrar y loguear, lo que le permitirá subir sus productos 

 ![image](https://github.com/silviachaluisa/Productores/assets/133398724/08f982d6-24ff-4fde-844c-14cf27fa0080)

Actualizar los productos en caso de ser necesarios 

![image](https://github.com/silviachaluisa/Productores/assets/133398724/6e686486-42ee-41a3-a6aa-ade886d20e8a)

 
Borrar los productos en caso de ser necesario 

![image](https://github.com/silviachaluisa/Productores/assets/133398724/5c70cac2-be53-49ed-9e79-c8cf4e3d4e98)

 

