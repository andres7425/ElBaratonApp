This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Front end Rappi Test using React + Redux

## Frontend Developer Challenge
### Requerimientos


Tiendas “El Baratón” necesita un e-commerce para expandir sus servicios, para eso don Pepe (propietario de la tienda) ha provisto de los siguientes requerimientos:
 * La tienda debe mostrar categorías las cuales están conformadas por subniveles, éstos subniveles a su vez pueden tener más subniveles anidados, se debe hacer un menú donde aparezcan categorías y subniveles de forma anidada. Ejemplo:
 
      * Categoría licores
   * subnivel vinos
        * subnivel vinos tintos
        * subnivel vinos blancos  
        
* Los productos tienen un identificador principal y un identificador de subnivel, esto quiere decir que un producto sólo debe ser mostrado en su subnivel correspondiente.
* Los productos deben filtrarse por: disponibilidad, rango de precios, cantidad en stock.
* Los productos deben poder ordenarse por precio, disponibilidad y cantidad.
* Se debe crear un carrito de compras donde los usuarios puedan agregar, editar cantidad y eliminar un producto.
* Los productos deben permanecer en el carrito si el usuario cierra y abre la página, solo deben ser borrados si el usuario realiza la compra.
* Un subnivel final es aquel que no tiene más subniveles, en éste caso debe aparecer una caja de texto que permita realizar búsquedas de productos por nombre en dichos subniveles.
* Además, el ecommerce debe ser responsive.



## Table of Contents

- [Setting up](#setting-up)
- [Steps](#steps)
- [Developed with](#developed-with)
- [Authors](#authors)


## Setting up

Para este test se decidio utilizar ReactJS como Libreria principales de JS. Se utilizo la version 2 de create-react-app.

La estructura del proyecto es la creada mediante create-react-app , especificada en el siguiente [link](https://github.com/facebook/create-react-app).

Se altero el archivo product.json, se agregaron los siguientes datos para facilitar el desarrollo del boton de carrito de compras :"inCart"
                    "count"
                    "total" 

## Steps

 Clonar este repositorio (`git clone git://github.com/andres7425/ElBaratonApp`)
 
 
```bash
 cd Baraton-rappi-app
 npm install
 npm run build
 npm run start  //Esto abrira la aplicacion en http://localhost:3000
 ```

## Developed with

* [ReactJS](https://reactjs.org/) - Libreria utilizada para el desarrollo del frontend.


## Authors

* **Andres Manrique Garcia**
